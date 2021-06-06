<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer @onClock="onClock" title="CMU" color="black"/>

    <span class="clock">{{time}} </span>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import moment from "moment";


export default {
  name: "app",
  
  methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYY hh:mm:ss')
    }
  },

  data() {
    return {
      time:""
    }
  },
  
  components:{
    Header,
    Footer
  }
  }
</script>

<style scoped>
  .content{
    color: slateblue;
  }
  .clock{
    font-size: 30px;
    color: blueviolet;
  }
</style>