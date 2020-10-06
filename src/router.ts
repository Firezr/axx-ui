import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
// import Intro from "./views/Intro.vue";
// import Install from "./views/Install.vue";
// import GetStarted from "./views/GetStarted.vue";


import DocDefault from "./components/DocDefault.vue";
import SwitchDemo from "./components/switch/SwitchDemo.vue";
import ButtonDemo from "./components/button/ButtonDemo.vue";
import DialogDemo from "./components/dialog/DialogDemo.vue";
import TabsDemo from "./components/tabs/TabsDemo.vue";

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (path) => h(Markdown, { path: `../markdown/${path}.md`, key: path })

let history = createWebHashHistory()
export default createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          // 默认显示页面  /doc/
          path: '',
          component: DocDefault
        },
        {
          path: 'intro',
          // component: Intro,
          component: md('intro'),
        },
        {
          path: 'install',
          // component: Install,
          component: md('install'),
          
        },
        {
          path: 'get-started',
          // component: GetStarted,
          component: md('get-started'),
        },
        // 组件列表
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        },
      ]
    },
  ],
})
