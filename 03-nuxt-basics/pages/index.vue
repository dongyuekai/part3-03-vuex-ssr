<template>
  <div>
    <h1>Hello World</h1>
    <!-- a链接跳转路由 会刷新页面 -->
    <a href="/about">去about</a>

    <!-- router-link -->
    <router-link to="/about">去about</router-link>
    <nuxt-link to="/about">nuxt-link</nuxt-link>
    <!-- 编程式导航 -->
    <button @click="goToAbout">去about</button>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
<style></style>