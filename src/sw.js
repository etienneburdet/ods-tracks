/* global self */
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'


precacheAndRoute(self.__WB_MANIFEST)
registerRoute(
  new RegExp('.*(png|svg|jpg|gif|pbf)$'),
  new CacheFirst({ cacheName: 'img' })
)
