<template>
  <h1>常规使用</h1>
  <Tabs v-model:selectedTitle="selectedTitle">
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
    Tab
  },
  setup() {
    const selectedTitle = ref('导航2')
    return {
      selectedTitle
    }
  }
}
</script>
