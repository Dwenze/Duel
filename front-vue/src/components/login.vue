<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <input type="input" v-model="username">
    <input type="input" v-model="password">
    <input type="button" @click="login" value="登录">
  </div>
</template>

<script>
export default {
  name: 'Login',
   data () {
    return {
      username: "",
      password: "",
      msg: "",
    }
  },
  methods: {
    login() {
      var loginMsg = {
        username: this.username,
        password: this.password,
      }
      var secret = this.$secret.jwt_secret;
      var encoded = this.$jwt.encode(loginMsg, secret);
      this.$http.post('/api/login', {jwtString: encoded})
        .then((res) => {
          if (res.data.code === 0) {
            this.$router.push({path: '/'});
          }
          console.log(res);
          this.msg = res.data.msg;

        })
        .catch(err => {
          alert('服务器出错')
        });
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
