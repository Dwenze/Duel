<template>
  <div class="hello">
    <div class="m-hd">
      <el-container style="height: 500px; border: 1px solid">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)"></el-aside>
      <el-header>123</el-header>
      <el-menu :default-openeds="['1', '3']"></el-menu>
    </el-container>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',
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
.m-hd {
  position: fixed;
  width: 100%;
  height: 40px;
}
.el-header{
  min-width:500px;
  height:100px;
  background-color: orange;
}
</style>

