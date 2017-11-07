import Vue from 'vue'
import store from './store'
import counter from './counter.vue'

new Vue({
  el: '#app',
  render: h => h(counter),
  store  // 配置store ---> 所有的组件对象都多了一个属性$store
})