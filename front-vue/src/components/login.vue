<template>
  <div class="hello">
    <h2>登录</h2>
    <div class="input-container">
      <el-input v-model="username" placeholder="请输入用户名">
        <template name="c1" style="color:red" slot="prepend">用户名</template>
      </el-input>
      <el-input v-model="password" type="password" placeholder="请输入密码">
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div class="button-container" style="margin-top: 10px;">
      <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
    </div>
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
            console.log('Received token: '+ res.data.data);
            this.$message.success({
              message: '登录成功',
            });
            window.localStorage.setItem('auth', res.data.data);
            this.$router.push({path: '/'});
          }
          else {
            this.$message.error({
              message: '用户名或密码错误',
            });

          }
          console.log(res);
        })
        .catch(err => {
          this.msg = '服务器出错:'+err.message;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .input-container .el-input-group__prepend {
    width: 50px;
  }
  .input-container .el-input {
    margin-top: 10px;
  }
</style>
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


.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
