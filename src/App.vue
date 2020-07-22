<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  // 监听unload方法，如果重载页面就把state存入sessionStorage，然后在需要state的时候从sessionStorage中取值
  mounted () {
    window.addEventListener('unload', () =>
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    )
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
</style>
