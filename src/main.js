import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueLazyload from 'vue-lazyload';


const app = createApp(App)

app.use(VueLazyload)
app.use(AOS.init())
app.use(createPinia())
app.use(router)

app.mount('#app')
