/**
 * 让 ts 识别 vue 文件
 */
declare module '*.vue' {
  import Vue from 'vue'  //识别.vue文件
  export default Vue
}
