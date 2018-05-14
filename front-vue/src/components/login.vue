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
    login () {
      let token = "";
      if (token = window.localStorage.getItem('auth')) {
        console.log('Existing token: '+ token);
      }
      let loginMsg = {
        username: this.username,
        password: this.password,
      }
      this.$http.post('/api/login', loginMsg)
        .then((res) => {
          if (res.data.code === 0) {
            window.localStorage.setItem('auth', res.data.data);
            this.$router.push({path: '/'});
          }
          else {

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
