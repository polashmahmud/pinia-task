import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.baseURL="http://localhost:8000"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
