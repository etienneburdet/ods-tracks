import './app.scss'
import 'nouislider/distribute/nouislider.css'

import App from './App.svelte'

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//   })
// }

const app = new App({
  target: document.body
})
