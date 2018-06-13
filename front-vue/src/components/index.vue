<template>
  <div class="hello">
    <el-container class="shabi">
      <el-header class="caonima">
      </el-header>
      <el-container id="main">
      <el-main>
      </el-main>
      <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
      <el-aside id="niubi">
        <div class="acco-info">
        </div>
      </el-aside>

      </el-container>
      <div class="icon"></div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'index',
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
  height: 40px;
}
.el-container{
  height: 800px;
}
.el-header{
  background-color: orange;
   height: 400px;
}
.el-main{
  margin:30px;
  height: 100px;
  background-color: black;
}
.el-aside{
  width: 40%;
  background-color: lightgrey;
}
.acco-info{
  margin:30px;
  background-color: white;
   width: 240px;
  height: 400px;
}
.icon{
  margin-top: -850px;
   width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
