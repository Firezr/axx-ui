<template>
  <h1>Tabs 示例</h1>
  <Demo :component='Tabs1' />
</template>

<script lang="ts">
import Demo from "../Demo.vue"
import Tabs1 from "./Tabs1.demo.vue"
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1
    }
  }
}
</script>
