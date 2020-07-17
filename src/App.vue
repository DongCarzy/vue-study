<template>
    <div id="app">
        <router-view />
    </div>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_SUC } from "@store/mutation-types";

@Component
export default class App extends Vue {

   //监听unload方法，如果重载页面就把state存入sessionStorage，然后在需要state的时候从sessionStorage中取值
    mounted() {
        window.addEventListener('unload', () => sessionStorage.setItem('state', JSON.stringify(this.$store.state)))
    }
   
}
</script>

<style>
#app {
    width: 100%;
    height: 100vh;
}
</style>