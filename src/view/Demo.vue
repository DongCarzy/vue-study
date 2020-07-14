<template>
  <div>
    <button v-on:click="show">
      <span v-if="see">hidden</span>
      <span v-if="!see">show</span>
    </button>
    <div v-if="see">this click message</div>
    <br />
    {{msg}}
    <input type="text" v-model="msg" />
    <br />
    <h3>TODO-LIST</h3>
    <div>
      <label for="new-todo">Add a todo</label>
      <input type="text" v-model.trim="newTodo" />
      <button @click="add" :disabled="addDisable">ADD</button>
    </div>
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
        v-on:delete-item="deleteTodo"
      ></todo-item>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "@/component/TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class Demo extends Vue {
  private message = "页面加载于 " + new Date().toLocaleString();
  private see = true;
  msg = "";
  private groceryList = [
    { id: 0, text: "蔬菜" },
    { id: 1, text: "奶酪" },
    { id: 2, text: "随便其它什么人吃的东西" }
  ];
  private newTodo: string = "";

  get addDisable() {return this.newTodo === "";}

  show() {
    this.see = !this.see;
  }

  add() {
    let grocery = { id: this.groceryList.length, text: this.newTodo };
    if (this.newTodo) {
      this.groceryList.push(grocery);
      this.newTodo = "";
    }
  }

  deleteTodo(id: number): void {
    this.groceryList = this.groceryList.filter(v => v.id != id);
  }
}
</script>