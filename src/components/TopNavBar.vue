<template>
  <div class="top-nav-bar">
    <el-row>
      <el-col :span="4" style="padding-left: 10px;">VUE-STUDY</el-col>
      <el-col :span="6" :offset="14">
        <el-row class="submenu">
          <el-col :span="8" @click.native="pathTo('/main/map')">地图</el-col>
          <el-col :span="8" @click.native="pathTo('/main/manger')">后台管理</el-col>
          <el-col :span="8">
            <el-dropdown class="dropdown">
              <span>admin</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="loginout">注销</el-dropdown-item>
                <el-dropdown-item>关于</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- <el-menu
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
          <el-menu-item index="2">地图</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="3">后台管理</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-submenu index="4">
            <template slot="title">admin</template>
            <el-menu-item index="4-1">修改密码</el-menu-item>
            <el-menu-item index="4-2">注销</el-menu-item>
            <el-menu-item index="4-3">关于</el-menu-item>
          </el-submenu>
        </el-col>
      </el-row>
    </el-menu>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import { LOGIN_OUT } from "@store/mutation-types";

@Component({
  components: {}
})
export default class TopNavBar extends Vue {
  private activeIndex = "2";

  pathTo(keyPath: string) {
    this.$router.push(keyPath);
  }

  loginout(){
    this.$store.commit(LOGIN_OUT);
    this.$router.push("/login");
  }
}
</script>

<style>
.clean-active {
  border-bottom-color: #545c64 !important;
}

.submenu {
  text-align: center;
  vertical-align: middle;
}

.submenu :hover {
  color: goldenrod;
  cursor: pointer;
}

.top-nav-bar {
  width: 100%;
  height: 100%;
  padding-top: 1%;
  background-color: #545c64;
  font-size: 20px;
  color: #ffffff;
}

.dropdown {
  width: 100%;
  height: 100%;
  font-size: 20px !important;
  color: #ffffff !important;
}
</style>