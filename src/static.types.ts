export type StaticCacheControllerInit = {
  version: string | number;
  manifest: string[];
  shouldProcessRequests?: boolean;
  name?: string;
  debug?: boolean;
}
