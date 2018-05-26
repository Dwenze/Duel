<template>
  <div class="hello">
    <div class="m-hd"></div>
  </div>
</template>

<script>
export default {
  name: 'rank',
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
</style>
