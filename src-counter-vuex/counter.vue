<template>
  <div>
    <p>I clicked: {{count}} times, count is {{evenOrOdd2}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState} from 'vuex'
  export default {

    mounted () {
      console.log(this.$store)
    },

    /*
    {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    }
     */
    //computed: mapGetters(['count', 'evenOrOdd']),
    /*
    ...的功能:
    打包(数组)
      function fn(...args) {}
      fn(1, 2, 3)
    拆包(数组)
      arr1 = [1,3]
      arr2 = [4, ...arr1]
      ms = {
        a: 1,
        b: 2
      }
      <Xxx {...ms}>
    */
    computed: {
      ...mapState(['count']),  // 使用...进行拆包(对象)
      ...mapGetters({
        evenOrOdd2: 'evenOrOdd'
      })
    },
    /*
    {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    }
     */
    methods: mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
</script>

<style>

</style>