import Vue from 'vue'
import app from './components/app.vue'
import store from './store'
import './base.css'

new Vue({
  el: '#app',
  render: h => h(app),
  store
})