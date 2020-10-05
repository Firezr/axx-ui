<demo>常规使用</demo>
<template>
<div>
  <h1>Button 示例</h1>
  <Button>你好</Button>
  <Button theme="text">你好</Button>
  <Button theme="link">你好</Button>
</div>
</template>

<script lang="ts">
import { Button } from '../../lib/index'

export default {
  components: {
    Button
  },
  setup() {
    return {
    };
  },
};
</script>
