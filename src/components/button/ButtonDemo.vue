<template>
  <div>
    <Demo :component='Button1' />
    <Demo :component='Button2' />
    <Demo :component='Button3' />
    <Demo :component='Button4' />
    <Demo :component='Button5' />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Button1 from "./Button1.demo.vue";
import Button2 from "./Button2.demo.vue";
import Button3 from "./Button3.demo.vue";
import Button4 from "./Button4.demo.vue";
import Button5 from "./Button5.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1,
      Button2,
      Button3,
      Button4,
      Button5,
    };
  },
};
</script>
