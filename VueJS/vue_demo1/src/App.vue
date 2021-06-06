<template>
  <div id="app">
    <Header/>
    <router-view></router-view>

    <span class="title">Guide</span>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'


export default {
  name: "app",
  components:{
    Header
  }
  }
</script>

<style scoped>
 
  .title{
    font-size: 30px;
    color: salmon;
  }
</style>

<style>
  .content{
    color: slateblue;
  }
</style>