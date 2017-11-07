export default {
  completeSize (state) {
    return state.todos.filter(todo=>todo.complete).length
  },

  isAllComplete (state, getters) {
    return state.todos.length>0 && state.todos.length===getters.completeSize
  }
}