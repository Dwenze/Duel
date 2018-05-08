<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="input" name="send" @click="getDataFromExpress" value="get">
    <input type="input" name="send" @click="login" value="token">
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
