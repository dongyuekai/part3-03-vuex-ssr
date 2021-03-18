<template>
  <div>
    <h1>article {{ $route.params.id }}</h1>
    <h1>{{ article.title }}</h1>
    <div>
      {{ article.body }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ArticleDetailPage",
  async asyncData(context) { // context 是上下文 可以解析出 请求参数等
    const {data} = await axios({
      method: "GET",
      url: "http://localhost:3000/data.json",
    });
    const id = Number.parseInt(context.params.id);
    return {
      article: data.posts.find((item) => item.id === id),
    };
  },
};
</script>
<style></style>