<template>
  <div class="hello">
    <h2>注册</h2>
    <div class="input-container">
      <el-input v-model="username" placeholder="请输入用户名">
        <template name="c1" style="color:red" slot="prepend">用户名</template>
      </el-input>
      <el-input v-model="password" type="password" placeholder="请输入密码">
        <template slot="prepend">密码</template>
      </el-input>
      <el-input v-model="repassword" @blur="check" type="password" placeholder="确认密码">
        <template slot="prepend">重复</template>
      </el-input>
    </div>
    <div class="button-container" style="margin-top: 10px;">
      <el-button type="primary" style="width: 100%" @click="register" plain>注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
    data () {
    return {
      username: "",
      password: "",
      repassword: "",
      msg: "",
    }
  },
  methods: {
    check () {
      if (this.username === "") {
        this.$message.error({
          message: '用户名为空',
        });
        return false;
      }
      else if (typeof(this.username) !== "string") {
        this.$message.error({
          message: '非法用户名',
        });
        return false;
      }
      else if (this.username.length > 20) {
        this.$message.error({
          message: '用户名超过20个字符',
        });
        return false;
      }
      if (this.password === "") {
        this.$message.error({
          message: '密码为空',
        });
        return false;
      }
      else if (typeof(this.password) !== "string") {
        this.$message.error({
          message: '非法密码',
        });
        return false;
      }
      else if (this.password !== this.repassword) {
        this.$message.error({
          message: '两次输入的密码不一致',
        });
        return false;
      }
      else if (this.password.length > 20) {
        this.$message.error({
          message: '密码超过20个字符',
        });
        return false;
      }
      else {
        return true;
      }
    },
    register () {
      if (this.check()) {
        let token = "";
        if (token = window.localStorage.getItem('auth')) {
          console.log('Existing token: '+ token);
        }
        let registerMsg = {
          username: this.username,
          password: this.password,
        }
        this.$http.post('/api/register', registerMsg)
          .then((res) => {
            if (res.data.code === 0) {
              console.log('Received token: '+ res.data.data);
              this.$message.success({
                message: '注册成功，将自动登录',
              });
              window.localStorage.setItem('auth', res.data.data);
              this.$router.push({path: '/'});
            }
            else {
              this.$message.error({
                message: '注册失败',
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
