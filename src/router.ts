import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import DocDefault from "./components/DocDefault.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/Tabs.vue";

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
