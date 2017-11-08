<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearcompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>

  import {mapGetters, mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['completeSize']),
      isAllComplete: {
        get () {
          return this.$store.getters.isAllComplete
        },
        set (value) {
          // 对所有todo进行全选或全不选
          //this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: mapActions(['clearcompleteTodos'])
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>