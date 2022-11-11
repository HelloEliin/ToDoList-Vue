<template>

  <form @submit.prevent="onSubmit" class="flex flex-col items-center w-64">
    <label for="new-todo-input" class="mb-4"> What needs to be done? </label>
    <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" class="border-2 border-purple w-64" v-model.lazy.trim="label" />
    <button type="submit" class="font-semibold border-r-2 border-b-2 border-l-2 border-purple w-full bg-purple text-white mb-4">Add</button>
  </form>

</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit('todo-added', this.label);
      this.label = "";
    }

  },
  data() {
    return {
      label: ""
    };
  }
}
</script>