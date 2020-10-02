<template>
  <div>
    <h1>支持显示加载中</h1>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
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
