import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createWebHashHistory, createRouter } from "vue-router";
import Axx from "./components/Axx.vue";

let history = createWebHashHistory()
let router = createRouter({
    history: history,
    routes: [
      {
        path: '/',
        component: Axx
      }
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
