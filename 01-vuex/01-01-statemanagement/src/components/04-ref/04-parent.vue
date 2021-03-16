<template>
  <div>
    <h1>ref parent</h1>
    <child ref="c"></child>
  </div>
</template>
<script>
import child from "./04-child";
export default {
  components: {
    child,
  },
  mounted() {
    // mounted方法中执行是为了确保子组件加载完毕
    // 调用组件的focus方法
    this.$refs.c.focus();
    this.$refs.c.value = "hello input";
  },
};
</script>
<style>
</style>