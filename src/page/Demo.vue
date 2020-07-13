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

<script>
import todoItem from "@/component/todo-item";

export default {
  name: "demo",
  props: [],
  data: function() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      see: true,
      msg: "",
      groceryList: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便其它什么人吃的东西" }
      ],
      newTodo: ""
    };
  },
  computed: {
    addDisable: function() {
      return this.newTodo === "";
    }
  },
  methods: {
    show: function() {
      this.see = !this.see;
    },
    add: function() {
      let grocery = { id: this.groceryList.length, text: this.newTodo };
      if (this.newTodo) {
        this.groceryList.push(grocery);
        this.newTodo = "";
      }
    },
    deleteTodo: function(id) {
      this.groceryList = this.groceryList.filter(v => v.id != id);
    }
  },
  components: {
    "todo-item": todoItem
  }
};
</script>