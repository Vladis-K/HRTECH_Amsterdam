"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4a686ef4e906525a2e5acd95dc01ace9"],["/static/css/main.38e44a99.css","737d9d967114fadefb4b61e8018ead70"],["/static/js/main.f80c499a.js","4ef5c5ee855c61524cf0d2ed6f9c4f62"],["/static/media/Logo.41334cb5.scss","41334cb5b3eac702a1871e3061104abe"],["/static/media/data-icon-1.ee054324.png","ee0543245ed38f992655bec8b3d34f41"],["/static/media/data-icon-2.60abba54.png","60abba54331778676710ebe847abd731"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/logo-footer-hrn.a4d4df48.png","a4d4df4814efc21a47ee31f7b1bfc230"],["/static/media/museosansblack-webfont.9ec2cda8.woff2","9ec2cda81a9fe9b772463035ddde2e55"],["/static/media/museosansblack-webfont.ff0003a6.woff","ff0003a6634c6d14e497527b55648cee"],["/static/media/museosansbold-webfont.7fe5ab5e.woff2","7fe5ab5e28e27505a34ad30e7ae1fcf1"],["/static/media/museosansbold-webfont.9d2d18d8.woff","9d2d18d8c6468ac794e1e2769d957381"],["/static/media/museosanslight-webfont.0637884d.woff","0637884d09809fd24b4250bb40b1f5f6"],["/static/media/museosanslight-webfont.477c43a3.woff2","477c43a3ee175581cefa72d8e15a9f2e"],["/static/media/museosansmedium-webfont.13b32956.woff2","13b32956ad39fe4cc464ca502c98dc3c"],["/static/media/museosansmedium-webfont.9cbd5968.woff","9cbd59688df5585b06173bb676cb89df"],["/static/media/museosansregular-webfont.1fdae2fa.woff2","1fdae2fa9102c52f75b21fdddfe99232"],["/static/media/museosansregular-webfont.51794495.woff","517944955fd550d25e52a28d002da0ab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});