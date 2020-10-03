<template>
  <h1>常规使用</h1>
  <Button @click="toggle">打开对话框</Button>
  <Dialog 
  v-model:visible='visible'
  :cancel='onCancel'>
    <template v-slot:content>
      <strong>加粗的内容</strong>
      <div>普通的内容</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Button, Dialog } from "../../lib/index";
export default {
  components: {
    Button,
    Dialog, 
  },
  setup() {
    let visible = ref(false)
    let toggle = () => {
      visible.value = true
    }
    const onOk = () => {
      return 1
    }
    const onCancel = ()=>{
      return false
    }
    return {
      visible,

      toggle,
      onOk,
      onCancel
    }
  }
}
</script>
