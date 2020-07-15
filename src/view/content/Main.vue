<template>
  <div>
    <el-container>
      <el-container>
        <el-header style="padding: 0px;">
          <TopNavBar />
        </el-header>
        <el-main>
          <Menu />
          <el-row>
            <el-col :span="2">
              <Menu/>
            </el-col>
            <el-col :span="10">
              <router-view />
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNavBar from "@component/TopNavBar.vue";
import Menu from "@/view/content/menu/Menu.vue";

@Component({
  components: {
    TopNavBar,
    Menu
  }
})
export default class Main extends Vue {}
</script>

<style scoped>
</style>