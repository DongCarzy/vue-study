<template>
  <el-row>
    <el-col :span="4">
      <Menu />
    </el-col>
    <el-col :span="20">
      <router-view />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class Manger extends Vue {}
</script>
