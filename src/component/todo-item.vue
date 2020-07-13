<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('delete-item', todo.id)">delete</button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ["todo"]
};
</script>

<style>
</style>