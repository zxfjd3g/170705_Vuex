import {
  ADD_TODO,
  RECEIVE_TODOS,
  SELECT_ALL,
  DELETE_TODO,
  CLEAR_COMPLETE_TODOS
} from './mutation-types'
import storageUtils from '../utils/storageUtils'
export default {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  readTodos ({commit}) {
    // 模块异步读取保存的数据
    setTimeout(() => {
      const todos = storageUtils.getTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll ({commit}, checked) {
    commit(SELECT_ALL, {checked})
  },

  clearcompleteTodos ({commit}) {
    commit(CLEAR_COMPLETE_TODOS)
  }
}