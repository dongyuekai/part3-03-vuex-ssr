<template>
  <div>
    <h1>Hello World</h1>
    <!-- a链接跳转路由 会刷新页面 -->
    <a href="/about">a标签</a><br />

    <!-- router-link -->
    <router-link to="/about">router-link</router-link><br />
    <nuxt-link to="/about">nuxt-link</nuxt-link><br />
    <!-- 编程式导航 -->
    <button @click="goToAbout">编程式导航</button>

    <h1>asyncData服务端渲染data-{{ title }}</h1>
    <ul>
      <li v-for="item in posts" :key="item.id">
        <nuxt-link :to="'/article/' + item.id">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  layout: "foo", // 指定当前组价布局组件为layouts/foo.vue 默认是 layouts/default.vue
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
  data() {
    return {
      foo: "bar",
    };
  },
  async asyncData() {
    // 注意asyncData中没有this
    // 当需要动态数据有利于SEO或首屏加载数据有优化的时候使用asyncData asyncData不能在子组件中使用 只能通过首页使用获取到数据 传递数据给子组件
    const res = await axios({
      method: "GET",
      url: "http://localhost:3000/data.json",
    });
    return res.data; // 这里返回的数据会和原来的data对象 混合在一起
  },
};
</script>
<style></style>