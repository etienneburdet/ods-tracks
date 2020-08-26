/* global self */
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'


precacheAndRoute(self.__WB_MANIFEST)
registerRoute(
  new RegExp('.*(png|svg|jpg|gif)$'),
  new CacheFirst({ cacheName: 'img' })
)
registerRoute(
  new RegExp ('https:\/\/eburdet\.opendatasoft\.com\/api\/v2\/'),
  new StaleWhileRevalidate()
)
