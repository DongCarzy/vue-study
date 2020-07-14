<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item type="flux" index="1" class="clean-active">VUE-STUDY</el-menu-item>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="2">
          <el-menu-item index="2">后台管理</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-submenu index="3">
            <template slot="title">admin</template>
            <el-menu-item index="3-1">修改密码</el-menu-item>
            <el-menu-item index="3-2">注销</el-menu-item>
            <el-menu-item index="3-3">关于</el-menu-item>
          </el-submenu>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TopNavBar extends Vue {
  activeIndex = "2";

  handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style>
.clean-active {
  border-bottom-color: #545c64 !important;
}
</style>