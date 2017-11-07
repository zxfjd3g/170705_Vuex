/*
vuex的store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  increment ({commit}) {
    commit("INCREMENT")
  },
  decrement ({commit}) {
    commit("DECREMENT")
  },
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit("INCREMENT")
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit("INCREMENT")
    }, 1000)
  }
}
const getters = {
  /*count (state) {
    return state.count
  },*/
  evenOrOdd (state) {
    return state.count%2===1 ? '奇数' : '偶数'
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})