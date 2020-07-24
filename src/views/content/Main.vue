<template>
  <div class="main">
    <el-container direction="vertical">
      <TopNavBar class="bar"></TopNavBar>
      <router-view class="router"></router-view>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TopNavBar from '@/components/TopNavBar.vue'

@Component({
  components: {
    TopNavBar
  }
})
export default class Main extends Vue {}
</script>

<style lang='scss' scoped>
.main {
  width: 100vw;
  height: 100%;
  .el-container {
    width: 100vw;
    height: 100%;
    .bar {
      width: 100vw;
      height: 24px;
    }
    .router {
      width: 100vw;
      height: 100%;
    }
  }
}
</style>
