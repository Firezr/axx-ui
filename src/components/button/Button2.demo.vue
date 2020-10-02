<template>
  <div>
    <h1>支持 size</h1>
    <div>
      <div>
        <Button size="big">大大大</Button>
        <Button>普通</Button>
        <Button size="small">小小小</Button>
      </div>
      <div>
        <Button theme="link" size="big">大大大</Button>
        <Button theme="link">普通</Button>
        <Button size="small" theme="link">小小小</Button>
      </div>
      <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普通</Button>
        <Button size="small" theme="text">小小小</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "../../lib/index";

export default {
  components: {
    Button,
  },
  setup() {
    return {};
  },
};
</script>
