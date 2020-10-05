<demo>常规用法</demo>
<template>
  <Switch v-model:checked="checked" />
</template>

<script lang="ts">
import { Switch } from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },
};
</script>
