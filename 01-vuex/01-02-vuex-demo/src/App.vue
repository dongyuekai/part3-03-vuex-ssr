<template>
  <div id="app">
    <h1>Vuex</h1>
    <!-- 直接调用 -->
    <!-- count: {{ $store.state.count }} <br />
    msg: {{ $store.state.msg }}<br /> -->

    <!-- 通过mapState在计算属性里直接展开属性 -->
    <!-- count:{{ count }}<br />
    msg: {{ msg }} -->

    <!-- 通过mapState定义state别名 -->
    count: {{ num }}<br />
    msg: {{ message }}

    <h2>Getter</h2>
    <!-- reverseMsg: {{ $store.getters.reverseMsg }} -->
    reverseMsg: {{ reverseMsg }}<br />

    <h2>Mutation</h2>
    <!-- <button @click="$store.commit('increate', 2)">Mutation</button> -->
    <button @click="increate(2)">Mutation</button>

    <h2>Action</h2>
    <!-- <button @click="$store.dispatch('increateAsync', 2)">Action</button> -->
    <button @click="increateAsync(44)">Action</button>

    <h2>Module</h2>
    <!-- products:{{ $store.state.products.products }}<br /> -->
    <!-- 开启namespace就下面就不能这么调用了 -->
    <!-- <button @click="$store.commit('setProducts', [])">Mutation</button> -->

    <!-- products: {{ products }} <br />
    <button @click="setProducts([])">Mutation</button> -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // ...mapState(["count", "msg"]), // count: state => state.count
    ...mapState({ num: "count", message: "msg" }),
    ...mapGetters({ reverseMsg: "reverseMsg" }),
    // 导入products模块中的products
    ...mapState("products", ["products"]),
  },
  methods: {
    // ...mapMutations({ xxx: "increate" }),
    ...mapMutations(["increate"]),
    // ...mapActions({ xxx: "increateAsync" }),
    ...mapActions(["increateAsync"]),
    // 导出products模块中的setProducts Mutation
    ...mapMutations("products", ["setProducts"]),
  },
};
</script>

<style>
</style>