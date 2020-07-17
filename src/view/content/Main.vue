<template>
  <div ref="main" class="main">
    <div class="top-bar">
      <TopNavBar />
    </div>

    <div ref="children" class="children">
      <transition name="children">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import TopNavBar from "@components/TopNavBar.vue";

@Component({
  components: {
    TopNavBar
  }
})
export default class Main extends Vue {
  @Ref("main") main: any;
  @Ref("children") children: any;

  mounted() {
    const height = this.main.offsetHeight;
    this.children.style.height = height - 56 + "px";
  }
}
</script>

<style scoped>
/* 可以设置不同的进入和离开动画 */

/* 设置持续时间和动画函数 */

.children-fade-enter-active {
  transition: all 0.3s ease;
}

.children-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.children-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

 {
  transform: translateX(10px);
  opacity: 0;
}

.main {
  width: 100%;
  height: 100%;
}

.top-bar {
  width: 100%;
  height: 56px;
}

.children {
  width: 100%;
}
</style>