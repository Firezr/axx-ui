import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import Intro from "./markdown/intro.md";
import Install from "./markdown/install.md";
import GetStarted from "./markdown/get-started.md";

import DocDefault from "./components/DocDefault.vue";
import SwitchDemo from "./components/switch/SwitchDemo.vue";
import ButtonDemo from "./components/button/ButtonDemo.vue";
import DialogDemo from "./components/dialog/DialogDemo.vue";
import TabsDemo from "./components/tabs/TabsDemo.vue";

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (content) => h(Markdown, { content, key: content })

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
          redirect: '/doc/intro'
        },
        {
          path: 'intro',
          component: md(Intro),
        },
        {
          path: 'install',
          component: md(Install),
          
        },
        {
          path: 'get-started',
          component: md(GetStarted),
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
