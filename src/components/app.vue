<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <todo-main/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import main from './main.vue'
  import footer from './footer.vue'

  export default {

    mounted () {
      //读取localStorage存储的todos
      this.$store.dispatch('readTodos')
    },

    components: {
      'todo-header': header,
      'todo-main': main,
      'todo-footer': footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>