<demo>常规使用</demo>
<template>
  <Tabs v-model:selectedTitle="selectedTitle">
    <div>haha</div>
    <!-- <div v-for="tab in tabsArr" :key='tab.title'>
      <Tab :title="tab.title">
        {{tab.content}}
      </Tab>
    </div> -->
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import {
  Tabs,
  Tab
} from "../../lib/index";
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    
    let tabsArr = [
      {
        title: '导航1',
        content: '内容1'
      },
      {
        title: '导航2',
        content: '内容2'
      },
    ]
    let temp = tabsArr[0].title
    let selectedTitle = ref('导航1')
    return {
      tabsArr,
      selectedTitle,
    }
  }
}
</script>
