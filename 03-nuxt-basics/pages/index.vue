<template>
  <div>
    <h1>Hello World</h1>
    <!-- a链接跳转路由 会刷新页面 -->
    <a href="/about">a标签</a><br>

    <!-- router-link -->
    <router-link to="/about">router-link</router-link><br>
    <nuxt-link to="/about">nuxt-link</nuxt-link><br>
    <!-- 编程式导航 -->
    <button @click="goToAbout">编程式导航</button>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  layout: 'foo', // 指定当前组价布局组件为layouts/foo.vue 默认是 layouts/default.vue 
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
<style></style>