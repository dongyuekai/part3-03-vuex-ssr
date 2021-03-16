<template>
  <div>
    <h1 :style="{ fontSize: fontSize + 'em' }">子组件通过$emit给父组件传值</h1>
    <button @click="handler">字体变大</button>
  </div>
</template>
<script>
export default {
  props: {
    fontSize: Number,
  },
  methods: {
    handler() {
      this.$emit("enlargeText", 0.1);
    },
  },
};
</script>
<style></style>