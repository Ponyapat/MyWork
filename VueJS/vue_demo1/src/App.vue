<template>
  <div id="app">
        <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/demo1">Demo1</router-link></li>
      <li><router-link to="/demo2">Demo2 Event</router-link></li>
      <li><router-link to="/demo3">Demo3 Data</router-link></li>
    </ul>
    <router-view></router-view>

    <span class="title">Guide</span>
  </div>
</template>

<script>
export default {
  name: "app",
  }
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin-right : 8px; ;
  }

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