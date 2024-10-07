import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from "./store/auth.js"
axios.defaults.baseURL = 'http://localhost:3000';
const app = createApp(App)
const token = localStorage.getItem('token');
if (token) {
    store.commit('login', token);
}
app.use(router)
app.mount('#app')
