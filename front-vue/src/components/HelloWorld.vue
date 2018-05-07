<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="button" name="send" @click="getDataFromExpress" value="get">
    <input type="button" name="send" @click="login" value="token">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getDataFromExpress() {
      this.$http.post('/api')
        .then((res) => {
          console.log(res);
          this.msg = res.data.msg;
        })
        .catch((res) => {
          console.log(res);
        })
    },
    login() {
      var preload = { password: "o" };
      var secret = Buffer.from('ae1a1915a379f3be5394b64d14794932', 'hex');
      var token = this.$jwt.encode(preload, secret);
      var decoded = this.$jwt.decode(token, secret);
      console.log(token);
      this.$http.post('/api/token', {
          jwtString: token
        })
        .then((res) => {
          console.log(res);
          this.msg = res.data.msg;
        })
        .catch((res) => {
          console.log(res);
        })
    }
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
