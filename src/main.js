import Vue, { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/main.css';

Vue.configureCompat({ WATCH_ARRAY: false })

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')

