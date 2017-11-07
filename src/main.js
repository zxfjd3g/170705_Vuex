import Vue from 'vue'
import store from './store'
import counter from './counter.vue'

new Vue({
  el: '#app',
  render: h => h(counter),
  // store
})