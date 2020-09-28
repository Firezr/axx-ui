<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from 'vue'
import router from "./router";

export default {
  name: 'App',
  components: {
    
  },
  setup() {
    let width = document.documentElement.clientWidth

    let menuVisiable = ref( width > 500 ? true : false )
    // let menuVisiable = ref( true )
    provide('menuVisiable', menuVisiable) // set

    router.afterEach(() => {
      menuVisiable.value = width > 500 ? true : false
    });
  },
}
</script>
