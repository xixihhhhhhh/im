import { createApp } from 'vue'
import App from './App.vue'

import store from "@/store/index.ts"
import router from './router'

import '@/assets/css/main.css'
import './config/rem'
import "normalize.css"

const app = createApp(App)
app.use(store).use(router)
app.mount('#app')
