<template>
  <div>
    <h1>父组件给子组件传值（通过props）</h1>
    <child title="My journey with vue~~~"></child>
  </div>
</template>
<script>
import child from "./01-child";
export default {
  components: {
    child,
  },
};
</script>
<style></style>
  