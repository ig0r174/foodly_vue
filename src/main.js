import { createApp } from 'vue'
import { createPinia } from "pinia";
import 'reset-css'
import './assets/scss/main.scss'
import App from './App.vue'
import router from "./router/index.js";



createApp(App).use(createPinia()).use(router).mount('#app')