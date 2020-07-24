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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LOGIN_OUT } from '@/store/mutation-types'

@Component
export default class TopNavBar extends Vue {
  private activeIndex = '2'

  public pathTo(keyPath: string) {
    this.$router.push(keyPath)
  }

  public loginout() {
    this.$store.commit(LOGIN_OUT)
    this.$router.push('/login')
  }
}
</script>

<style lang="scss">
.clean-active {
  border-bottom-color: #545c64 !important;
}

.top-nav-bar {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #545c64;
  font-size: 22px;
  color: #ffffff;
  .submenu {
    text-align: center;
    vertical-align: middle;
    :hover {
      color: goldenrod;
      cursor: pointer;
    }
    .dropdown {
      width: 100%;
      height: 100%;
      font-size: 20px !important;
      color: #ffffff !important;
    }
  }
}
</style>
