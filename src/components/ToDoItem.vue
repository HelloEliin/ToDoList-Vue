<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" @change="$emit('checkbox-changed')"/>
    <label :for="id" class="ml-2 font-poppins"> {{label}}</label><br>
      <button type="button" class="text-xs font-poppins font-semibold border-r-2 border-b-2 border-l-2 border-purple w-1/2 bg-purple text-white mb-4" @click="deleteToDo">
        Delete 
      </button>
  </div>
</template>



<script>


  export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: {required: true, type: String}
  },
    data(){
    return{
      isDone: this.done,
    };
  },
  methods: {
    deleteToDo() {
      this.$emit('item-deleted');
    }
  }
};
</script>