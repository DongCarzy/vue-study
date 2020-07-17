<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/demo">demo</router-link>
    </div>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_SUC } from "@store/mutation-types";

@Component
export default class App  extends Vue {
  // created() {
  //   if (this.$store.state.token) {
  //     sessionStorage.setItem("token", this.$store.state.token);
  //   } else {
  //     this.$store.commit(LOGIN_SUC, sessionStorage.getItem("token"));
  //   }
  // }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>