<template>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1 from "./Dialog1.demo.vue";
import Dialog2 from "./Dialog2.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1,
      Dialog2,
    };
  },
};
</script>
