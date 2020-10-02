<template>
  <div>
    <Button1 />
    <Button2 />
    <Button3 />
    <Button4 />
    <Button5 />
  </div>
</template>

<script lang="ts">
import Button1 from "./Button1.demo.vue";
import Button2 from "./Button2.demo.vue";
import Button3 from "./Button3.demo.vue";
import Button4 from "./Button4.demo.vue";
import Button5 from "./Button5.demo.vue";
export default {
  components: {
    Button1,
    Button2,
    Button3,
    Button4,
    Button5,
  },
  setup() {
    return {};
  },
};
</script>
