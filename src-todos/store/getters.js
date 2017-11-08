export default {
  completeSize (state) {
    // 命令式编程
    /*let total = 0
    for (let i = 0; i < state.todos.length; i++) {
      if(state.todos[i].complete) {
        total++
      }
    }
    return total*/

    // 声明式编程
    return state.todos.reduce((preTotal, todo) => {
      return todo.complete ? preTotal+1 : preTotal
    }, 0)


    // return state.todos.filter(todo=>todo.complete).length
  },

  isAllComplete (state, getters) {
    return state.todos.length>0 && state.todos.length===getters.completeSize
  }
}