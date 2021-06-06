<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer title="CMU"/>

  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'


export default {
  name: "app",
  components:{
    Header,
    Footer
  }
  }
</script>

<style>
  .content{
    color: slateblue;
  }
</style>