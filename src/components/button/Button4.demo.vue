<template>
  <div>
    <h1>支持 disabled</h1>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
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
