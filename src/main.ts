import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "./lib/gulu.scss";
import './index.scss'
import './assets/svg.js'
import 'github-markdown-css'


const app = createApp(App)

app.use(router)

app.mount('#app')
