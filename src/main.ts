// 外部基础css文件必须写在 import App 及 import router之前,
// 不然外部样式会覆盖组件本身样式
import "./lib/axx.scss";
import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import './assets/svg.js'
import 'github-markdown-css'
// import Markdown from "./components/Markdown.vue";

const app = createApp(App)
app.use(router)
app.mount('#app')

// app.component("Markdown", Markdown)

