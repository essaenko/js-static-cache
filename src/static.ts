import { StaticCacheControllerInit } from "./static.types";

export class StaticCacheController {
  private readonly cacheVersion: string | number = 1;
  private readonly cacheStorageName: string = 'static_cache_controller';
  private readonly manifest: string[] = [];
  private readonly debugMode: boolean = false;
  private readonly shouldProcessRequests: boolean = false;

  constructor(init: StaticCacheControllerInit) {
    const { version, manifest, name, debug, shouldProcessRequests } = init;

    if ((self as any).__StaticCacheControllerInstance__) {
      return (self as any).__StaticCacheControllerInstance__;
    }

    this.cacheVersion = version;
    this.manifest = manifest;
    this.cacheStorageName = name || this.cacheStorageName;
    this.shouldProcessRequests = shouldProcessRequests === void 0 ? this.shouldProcessRequests : shouldProcessRequests;
    this.debugMode = !!debug;

    this._log('StaticCacheController constructor called');
    (self as any).__StaticCacheControllerInstance__ = this;

    this.onInstall().then(this.onActivate);
  }

  private _log = (...messages): void => {
    if (this.debugMode === true) {
      console.log(...messages);
    }
  }

  private onInstall = async (): Promise<void> => {
    this._log('Install event fired');
    await this.removeOutdatedCache();
  }

  private onActivate = async (): Promise<void> => {
    this._log('Activate event fired');
    await this.addAssetsToCache();
  }

  private removeOutdatedCache = async (): Promise<void> => {
    this._log('Trying to remove outdated cache');
    const cacheNames: string[] = await caches.keys();
    this._log(`Found caches: ${cacheNames}`);
    const jobs: Promise<boolean>[] = cacheNames.map((cacheName: string) => {
      if (cacheName.includes(this.cacheStorageName) && cacheName !== `${this.cacheStorageName}_${this.cacheVersion}`) {
        return caches.delete(cacheName);
      }

      return void 0;
    });

    await Promise.allSettled(jobs);
    this._log('Deleting outdated cache is done');
  }

  private addAssetsToCache = async (): Promise<void> => {
    this._log('Trying to add fresh assets to cache');
    const cache: Cache = await caches.open(`${this.cacheStorageName}_${this.cacheVersion}`);
    this._log('Created cache', cache);

    this._log('Applying manifest to cache', this.manifest);
    const jobs: Promise<void>[] = this.manifest.map(async (asset: string): Promise<void> => {
      this._log(`Trying to add ${asset} to cache, fetch result is`, await fetch(asset));
      await cache.add(asset);
    });

    await Promise.allSettled(jobs);
    this._log('Adding new cache is done');
  }

  private handleFetchEvent = async (event: FetchEvent): Promise<Response> => {
    const cache: Cache = await caches.open(`${this.cacheStorageName}_${this.cacheVersion}`);
    const match: Response = await cache.match(event.request);
    if (match) {
      this._log('Found response: ', match, ' for request: ', event.request);

      return match;
    } else if (this.shouldProcessRequests) {
      this._log('Not found response, trying to add response for request to cache :', event.request);
      await cache.add(event.request);

      return await cache.match(event.request);
    }

    return fetch(event.request);
  }

  public onFetch = async (event: FetchEvent): Promise<void> => {
    this._log('Fetch event fired', (event as any));

    if (event.request.method !== 'GET') {
      return void 0;
    }

    event.respondWith(this.handleFetchEvent(event));
  }

  public clearCaches = async (): Promise<void> => {
    await this.removeOutdatedCache();
  }
}
