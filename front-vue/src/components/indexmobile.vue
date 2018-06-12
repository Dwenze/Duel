<template>
  <div class="hello">
    <h1>移动端主页</h1>
    <el-container id="indexmobile">
    <el-header>
      <div class="header"></div>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'indexmobile',
  data () {
    return {
      ranking: [{username: 'test1', win: 130, lose: 30, point: 1190},
            {username: 'test2', win: 20, lose: 11, point: 134}],
      profile: {
        login: false,
        username: '',
        win: 0,
        lose: 0,
        point: 0,
        title: ''
      }
    }
  },
  mounted () {
  },
  computed: {
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
  height: 60px;
}

</style>
<style>
  .el-container{
  margin-top: 100px;
}
.header-container{
  width: 100%;
  height:100px;
  background-color: black;
}
</style>