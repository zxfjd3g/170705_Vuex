import {
  ADD_TODO,
  RECEIVE_TODOS,
  SELECT_ALL,
  DELETE_TODO,
  CLEAR_COMPLETE_TODOS
} from './mutation-types'
export default {

  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  },

  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL] (state, {checked}) {
    state.todos.forEach(todo => todo.complete=checked)
  },

  [CLEAR_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}