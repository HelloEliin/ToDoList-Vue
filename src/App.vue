<template>
  <div class="flex items-center justify-center flex-col h-screen w-full">
    <h1 class="text-3xl font-poppins">To-Do List</h1>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <h2 class="">{{listSummary}}</h2>

    <div class="flex flex-start flex-col mt-8 font-poppins">
      <p v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done" :id="item.id" @checkbox-changed="updateDoneStatus(item.id)" @item-deleted="deleteToDo(item.id)"></to-do-item>
      </p>
    </div>

  </div>
</template>

<script>

import ToDoItem from './components/ToDoItem.vue';
import uniqueId from 'lodash.uniqueid'
import ToDoForm from './components/ToDoForm';

export default {
  name: 'app',
  components: {
    ToDoItem,
    ToDoForm
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: false },
        { id: uniqueId('todo-'), label: 'Have fun', done: false },
        { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
      ]
    };
  },
  methods: {
    addToDo(toDoLabel) {
      this.ToDoItems.push({ id: uniqueId('todo-'), label: toDoLabel, done: false });
    },
    updateDoneStatus(toDoId) {
  const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
  toDoToUpdate.done = !toDoToUpdate.done
},
deleteToDo(toDoId) {
  const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
  this.ToDoItems.splice(itemIndex, 1);
},
  },
  computed: {
  listSummary() {
    const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
    return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
  }
}
};


</script>
<style src="./assets/tailwind.css">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap');




</style>

