<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div ref="wrap"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { initPhoneBar } from '@mc/phone-pc-sdk'
// import { initPhoneBar } from '@mc/phone-pc-sdk/lib/esm.vue.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    initPhoneBar(this.$refs.wrap, {
      agNo: '8001',
      password: '1q2w3e4r'
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
