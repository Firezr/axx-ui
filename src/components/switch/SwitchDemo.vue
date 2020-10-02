<template>
<div>
  <Switch1 />
  <Switch2 />
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
import Switch1 from "./Switch1.demo.vue";
import Switch2 from "./Switch2.demo.vue";
// 组件首字母必须大写？
export default {
  components: {
    Switch1, Switch2
  },
  setup() {
    let checked = ref(false)
    return {
      checked
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
