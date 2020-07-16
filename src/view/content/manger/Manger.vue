<template>
  <div>
    <el-row>
      <el-col :span="2">
        <Menu />
      </el-col>
      <el-col :span="10">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@components/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class Manger extends Vue {}
</script>
