<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  // setup(props) {
  //   let content = ref("");
  //   // 异步加载，相对会慢   并且build之后，path为相对于dist的路径，拿不到.md文件，所以不可取！！
  //   import(props.path).then((res) => {
  //     content.value = res.default;
  //   });

  //   return { content };
  // },
};
</script>
