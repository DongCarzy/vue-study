<template>
  <li>
    {{ todo.text }}
    <button @click="deleteItem(todo.id)">delete</button>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class TodoItem extends Vue {

  @Prop()
  private todo:any;

  @Emit()
  private deleteItem(id: number) {
    return id;
  }
}
</script>

<style>
</style>