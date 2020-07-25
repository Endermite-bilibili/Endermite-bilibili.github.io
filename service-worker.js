/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/404.html","501872f074d33b82e332fd61805e8622"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/Hexo-Theme-Sakura/index.html","d951451cb4cb48688d79764b7b5d54b8"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/about/index.html","59d0ef03da8d757421f5094297ba71ee"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/archives/2020/07/index.html","22bfac27d42a93af2a7138e0a188fbb9"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/archives/2020/index.html","9156c5c09f7a59de997e70a045778f92"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/archives/index.html","5c7d4300fcac0ded8073928dc3a8890d"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/bangumi/index.html","33b89f894cab25226d6df656727a5be7"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/categories/技术/index.html","56895287a4cf2314addee73be00ddbcc"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/comment/index.html","296a0147994164e10cfcc04239659834"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/donate.css","e1782023f40a5908725451e11cb7466b"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/lib.min.css","fbe3f60f9850a30abecc0ec893f0d535"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/sharejs.css","abc6932e2c80694de2b646c1f311823c"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/style.css","0bfc95791a56d43f3dabba5b043f9d66"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/donate/index.html","ac59fbd2cfcd0e5030cb9883d30e552a"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/iconfont.svg","9cadc5b52ff3769b2a1992243b6382ed"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/5122e61bbded0d5d7eeef54f58ad2c26.jpg","e59ec4c88e05b0a888ef93615b69f7d7"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/85eb36aba5e019a1106f022c0c0c058e.jpg","db2d36f859c79419cd7ec2f4ef1d79a5"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/ac2ecd77683b4237d9383a8c3cd3cf15.jpg","eb5aad48134e556c63cb4381ab332b37"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/airpay.png","c94ade9203686ae21a475f5b3c3b2cf5"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/apple-touch-icon.png","e8f359971c4465595cf0e6778b01ad16"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/bilibili.jpg","ebf987faf567a52f699b95426b357389"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/AliPayQR.jpg","b1e8178f4e4fa08fa8ba6e0d327a4887"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/WeChanQR.jpg","a4be00480be7ce6987db0658a050695e"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/WeChanSQ.jpg","672f36c440ada6abfc9809e9e8c61fd6"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/alipay.svg","9239702087add999b29eda6c69b7fac3"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/donate/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/email.svg","15f03e51e554c3664f0fda75c2fea1a8"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/github.png","5a637202a4a945502019acebf0261602"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/linkcard.png","53191e3b25b6713e3e77680dbeb8f1e6"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa.png","13935b1907ef6586ccd1b2bb2f9238d5"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa144.png","4234ec7503a4b6b5b6829cbdd1a79fc9"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa180.png","e8f359971c4465595cf0e6778b01ad16"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa192.png","a3f1b96aaea7c085c6582f281c3a3716"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa36.png","2bb04eb7a1465403f723681ab16ec3dc"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa48.png","873d4b43154a9289c331b26fbf151346"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa512.png","cc3c86641d7d7ea6bc354f13671df308"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa72.png","01ca0043e8afe7fe811bdfa76e4750b1"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/pwa96.png","b7a47d485364f192463c17a8c50dfe93"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/sakura.md.png","6fc37ece0d56d8e2b77f63af05a55f70"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/sina.png","b7809c01512d62f879f966c1141c2732"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/wangshiwu.jpg","8f8b1b0c300e1e70c24de4087e94adff"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/wangyiyun.png","3c403d7769aab82c48bd2df1022c1c49"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/web.jpg","2d91accb6d78a149b54c8ff17955414f"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/yebuxiu.gif","c3202f93da36700503e8e4b71ca2efc8"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/images/zhihu-card-default.svg","2782854bdc65cf1b2c6affcebf52668b"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/index.html","fd7f7cd252d488d4e4344f130fee848c"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/anime.min.js","7b7d9c2344ec7bb776c95e6d9144470f"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/backgrondrightdown.js","1a3be845085b8d94a2997a3a472feb42"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/botui.js","97cd616fe53bd42e715c269ae6ad7701"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/cursor.js","f0a1fc835332296f4db8cfbdbdb0081b"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/fireworks.js","ed626c02f6b683ad43208e5d5784a769"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/hititle.js","e2faed8edd9a382b8b9daabaa172f042"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/linkcard.js","23e885d30fe8b523d2a8cb0a5633a3dd"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/notice.js","883784588e702b6a3ce84b7dc6fa982b"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/piao.js","6ffc7c6d6e6714ea0c446dc79ec25962"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/sakura-app.js","aa67fc1739deabe55529702854fe2683"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/shehuizhuyi.js","5954e970c16f8ca402a0b03dffc7d9b2"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/lab/index.html","0b36ad18f87bdb298351083e7f86a7e0"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/links/index.html","7e4fefc335300ca5f00825c26874cb62"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/README.html","e3f1444aaf93bd06c481096dd99335f8"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/autoload.js","750bdb72f3d7bfe38281a01f8926a995"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/demo/demo1.html","d6bd1f7eee29bfead3ae3fb264f22468"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/demo/demo2.html","e9d5cd11c4de8a1bbd4d933b282029ed"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/waifu-tips.js","eda76de1d06157446506dbe35556a889"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/live2d-widget/waifu.css","6d147ff41f40d5a474052d2a3b4cfa4a"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/music/index.html","b387e0a54050abefd8feea29144f1606"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/rss/index.html","7aaa3ed5ec24e7c2e527a6db828b7707"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/sw.js","72e7e9951433a0f707066edce4041ae4"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/tags/index.html","2e0bb006b4df7b3fa05d1cf1d06b1cd7"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/tags/web/index.html","d1ae96a797204db3656f78e463878d01"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/tags/悦读/index.html","5abc0af57aeb125292f31cc164519cce"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/theme-sakura/index.html","9989512d79c3f95438efebc813452f8d"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/video/index.html","805276076b99567952eb9396db473ecd"],["D:/Users/30149/Desktop/hexo-theme-sakura-master/public/warn.html","d4cd7ba0f7f1423484858a38bada239f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







