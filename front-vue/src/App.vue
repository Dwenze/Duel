<template>
  <div id="app">
    <header></header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Login from './components/login';
import Register from './components/register';
import Header from './components/header';
export default {
  name: 'App',
  components: {Login, Register, Header}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
