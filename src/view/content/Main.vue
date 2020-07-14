<template>
  <div>
    <el-container>
      <el-container>
        <el-header>
          <TopNavBar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import TopNavBar from "@component/TopNavBar.vue"

@Component({
  components: {
    TopNavBar
  }
})
export default class Main extends Vue {

}
</script>

<style>

</style>