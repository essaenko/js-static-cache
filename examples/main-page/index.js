// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
          ? global
          : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1uaZ7":[function(require,module,exports) {
    var global = arguments[3];
    var define;
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
    (function (modules, entry, mainEntry, parcelRequireName, globalName) {
      /*eslint-disable no-undef*/
      var globalObject = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
      /*eslint-enable no-undef*/
      // Save the require from previous bundle to this closure if any
      var previousRequire = typeof globalObject[parcelRequireName] === 'function' && globalObject[parcelRequireName];
      var cache = previousRequire.cache || ({});
      // Do not use `require` to prevent Webpack from trying to bundle this call
      var nodeRequire = typeof module !== 'undefined' && typeof module.require === 'function' && module.require.bind(module);
      function newRequire(name, jumped) {
        if (!cache[name]) {
          if (!modules[name]) {
            // if we cannot find the module within our internal map or
            // cache jump to the current global require ie. the last bundle
            // that was added to the page.
            var currentRequire = typeof globalObject[parcelRequireName] === 'function' && globalObject[parcelRequireName];
            if (!jumped && currentRequire) {
              return currentRequire(name, true);
            }
            // If there are other bundles on this page the require from the
            // previous one is saved to 'previousRequire'. Repeat this as
            // many times as there are bundles until the module is found or
            // we exhaust the require chain.
            if (previousRequire) {
              return previousRequire(name, true);
            }
            // Try the node require function if it exists.
            if (nodeRequire && typeof name === 'string') {
              return nodeRequire(name);
            }
            var err = new Error("Cannot find module '" + name + "'");
            err.code = 'MODULE_NOT_FOUND';
            throw err;
          }
          localRequire.resolve = resolve;
          localRequire.cache = {};
          var module = cache[name] = new newRequire.Module(name);
          modules[name][0].call(module.exports, localRequire, module, module.exports, this);
        }
        return cache[name].exports;
        function localRequire(x) {
          return newRequire(localRequire.resolve(x));
        }
        function resolve(x) {
          return modules[name][1][x] || x;
        }
      }
      function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
      }
      newRequire.isParcelRequire = true;
      newRequire.Module = Module;
      newRequire.modules = modules;
      newRequire.cache = cache;
      newRequire.parent = previousRequire;
      newRequire.register = function (id, exports) {
        modules[id] = [function (require, module) {
          module.exports = exports;
        }, {}];
      };
      Object.defineProperty(newRequire, 'root', {
        get: function () {
          return globalObject[parcelRequireName];
        }
      });
      globalObject[parcelRequireName] = newRequire;
      for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i]);
      }
      if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);
        // CommonJS
        if (typeof exports === 'object' && typeof module !== 'undefined') {
          module.exports = mainExports;
        } else if (typeof define === 'function' && define.amd) {
          define(function () {
            return mainExports;
          });
        } else if (globalName) {
          this[globalName] = mainExports;
        }
      }
    })({
      "initModule": [function (require, module, exports) {
        var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
        _parcelHelpers.defineInteropFlag(exports);
        _parcelHelpers.export(exports, "init", function () {
          return init;
        });
        function init() {
          var _src = require("../../src");
          console.log('Create static controller');
          const controller = new _src.StaticCacheController({
            version: 1,
            manifest: ['/main/index.html', '/main'],
            debug: true,
            shouldProcessRequests: false
          });
          self.addEventListener('fetch', controller.onFetch);
          self.addEventListener('message', controller.onMessage);
        }
      }, {
        "../../src": "3rfh7",
        "@parcel/transformer-js/lib/esmodule-helpers.js": "5gA8y",
      }],
      "3rfh7": [function (require, module, exports) {
        var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
        _parcelHelpers.defineInteropFlag(exports);
        _parcelHelpers.export(exports, "StaticCacheController", function () {
          return _static.StaticCacheController;
        });
        var _static = require("./static");
      }, {
        "./static": "7g8PU",
        "@parcel/transformer-js/lib/esmodule-helpers.js": "5gA8y"
      }],
      "7g8PU": [function (require, module, exports) {
        var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
        _parcelHelpers.defineInteropFlag(exports);
        _parcelHelpers.export(exports, "StaticCacheController", function () {
          return StaticCacheController;
        });
        class StaticCacheController {
          cacheVersion = 1;
          cacheStorageName = 'static_cache_controller';
          manifest = [];
          debugMode = false;
          shouldProcessRequests = true;
          constructor(init) {
            const {version, manifest, name, debug, shouldProcessRequests} = init;
            if (self.__StaticCacheControllerInstance__) {
              return self.__StaticCacheControllerInstance__;
            }
            this.cacheVersion = version;
            this.manifest = manifest;
            this.cacheStorageName = name || this.cacheStorageName;
            this.shouldProcessRequests = shouldProcessRequests === void 0 ? this.shouldProcessRequests : shouldProcessRequests;
            this.debugMode = !!debug;
            this._log('StaticCacheController constructor called');
            self.__StaticCacheControllerInstance__ = this;
            this.onInstall().then(this.onActivate);
          }
          _log = (...messages) => {
            if (this.debugMode === true) {
              console.log(...messages);
            }
          };
          onInstall = async () => {
            this._log('Install event fired');
            await this.removeOutdatedCache();
          };
          onActivate = async () => {
            this._log('Activate event fired');
            await this.addAssetsToCache();
          };
          removeOutdatedCache = async () => {
            this._log('Trying to remove outdated cache');
            const cacheNames = await caches.keys();
            this._log(`Found caches: ${cacheNames}`);
            const jobs = cacheNames.map(cacheName => {
              if (cacheName.includes(this.cacheStorageName) && cacheName !== `${this.cacheStorageName}_${this.cacheVersion}`) {
                return caches.delete(cacheName);
              }
              return void 0;
            });
            await Promise.allSettled(jobs);
            this._log('Deleting outdated cache is done');
          };
          addAssetsToCache = async () => {
            this._log('Trying to add fresh assets to cache');
            const cache = await caches.open(`${this.cacheStorageName}_${this.cacheVersion}`);
            this._log('Created cache', cache);
            this._log('Applying manifest to cache', this.manifest);
            const jobs = this.manifest.map(async asset => {
              this._log(`Trying to add ${asset} to cache, fetch result is`, await fetch(asset));
              await cache.add(asset);
            });
            await Promise.allSettled(jobs);
            this._log('Adding new cache is done');
          };
          handleFetchEvent = async event => {
            const cache = await caches.open(`${this.cacheStorageName}_${this.cacheVersion}`);
            const match = await cache.match(event.request);
            if (match) {
              this._log('Found response: ', match, ' for request: ', event.request);
              return match;
            } else if (this.shouldProcessRequests) {
              this._log('Not found response, trying to add response for request to cache :', event.request);
              await cache.add(event.request);
              return await cache.match(event.request);
            }
            return fetch(event.request);
          };
          onFetch = async event => {
            this._log('Fetch event fired', event);
            if (event.request.method !== 'GET') {
              return void 0;
            }
            event.respondWith(this.handleFetchEvent(event));
          };
          onMessage = async event => {
            console.log(event);
          };
          clearCaches = async () => {
            await this.removeOutdatedCache();
          };
        }
      }, {
        "@parcel/transformer-js/lib/esmodule-helpers.js": "5gA8y"
      }],
      "5gA8y": [function (require, module, exports) {
        "use strict";
        exports.interopDefault = function (a) {
          return a && a.__esModule ? a : {
            default: a
          };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (key === 'default' || key === '__esModule') {
              return;
            }
            // Skip duplicate re-exports when they have the same value.
            if ((key in dest) && dest[key] === source[key]) {
              return;
            }
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              }
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get
          });
        };
      }, {}]
    }, ["1uaZ7"], "1uaZ7", "parcelRequire4251");

  },{}]},["1uaZ7"], "1uaZ7", "parcelRequire4251");

try {
  const module = self['parcelRequire4251']('initModule', true);
  module.init();
} catch (e) {
  console.log('Main entry', self, e);
}

// if (require) {
//   console.log('Require 200');
//   // require('1uaZ7');
// } else {
//   console.log('Require 404');
// }

//# sourceMappingURL=index.js.map
