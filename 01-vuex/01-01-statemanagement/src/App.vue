<template>
  <div id="app">
    <h1>父给子传值（props）</h1>
    <parent01></parent01>
    <hr />
    <h1>子给父传值（$emit）</h1>
    <parent02></parent02>
    <hr />
    <h1>不相干两个组件之间传值(EventBus)</h1>
    <sibling01 num="39"></sibling01>
    <sibling02></sibling02>
    <hr />
    <h1>ref取值</h1>
    <refparent></refparent>
    <hr />
    <h1>简易的状态管理</h1>
    <componentA05></componentA05>
    <componentB05></componentB05>
  </div>
</template>
<script>
import parent01 from "./components/01-props-down/01-parent";
import parent02 from "./components/02-event-up/02-parent";
import sibling01 from "./components/03-event-bus/03-sibling-01";
import sibling02 from "./components/03-event-bus/03-sibling-02";
import refparent from "./components/04-ref/04-parent";
import componentA05 from "./components/05-easystate/05-componentA";
import componentB05 from "./components/05-easystate/05-componentB";
export default {
  name: "App",
  components: {
    parent01,
    parent02,
    sibling01,
    sibling02,
    refparent,
    componentA05,
    componentB05,
  },
};
</script>
<style>
</style>
