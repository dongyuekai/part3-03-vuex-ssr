<template>
  <div>
    <h1 :style="{ fontSize: hFontSize + 'em' }">子组件传过来的</h1>
    <child :fontSize="hFontSize" v-on:enlargeText="enlargeText"></child>
  </div>
</template>
<script>
import child from "./02-child";
export default {
  components: {
    child,
  },
  data() {
    return {
      hFontSize: 1,
    };
  },
  methods: {
    enlargeText(size) {
      this.hFontSize += size;
    },
  },
};
</script>