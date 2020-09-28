<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let menuVisiable = ref(true)
    provide('menuVisiable', menuVisiable) // set
  },
}
</script>
