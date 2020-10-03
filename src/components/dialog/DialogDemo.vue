<template>
  <Dialog1 />
  <Dialog2 />
</template>

<script lang="ts">
import Dialog1 from "./Dialog1.demo.vue";
import Dialog2 from "./Dialog2.demo.vue";
export default {
  components: {
    Dialog1,
    Dialog2, 
  },
  setup() {
    return {
    }
  }
}
</script>
