# Motivation

As we can see, web surfing became more mobile and there is no guarantee that your user will always on 4g/5g connection, so here we should deliver to our users some offline functionality.
This library will help you easily add offline cache of all GET request for your app. Without complicated setup, a lot of settings and any other things, simple resource caching.

# Usage

All is you need it's array of resources or URL's to be cached, you can find plugin or library that will handle this job for you by your build lib (parcel, webpack, etc).

Next create (if you don't do it already) service worker file and instantiate StaticCacheController at start of script.

```typescript
import { StaticCacheController } from "@essaenko/js-static-cache";

const controller: StaticCacheController = new StaticCacheController({
  version: 1, // Required field: version will helps you remove old cache and recreate storage with new one
  name: 'myAppCache', // Optional field: you can name cache for your app to exactly know where your data stored, default name is 'static_cache_controller'
  manifest: ['/', '/index.js', '/index.css', '/api/json/news'], // Required field: array of assets or url's to be cached
  shouldProcessRequests: true, // Optional field: if you want to cache all sent GET requests - set this field to true, false by default
  debug: true // Optional field: This option can get you some information for debugging
});
```
*StaticCacheController* - realises singleton pattern, if you'll try to create more than one instance it will return you existed one 

# Examples

You can find some examples in folder 'examples'
Just run ```npm run serve:examples``` and navigate to http://localhost/

# Commands

```npm run watch``` - ts build watcher

```npm run build``` - builds project by ts-compiler
