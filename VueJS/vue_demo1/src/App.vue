<template>
  <div id="app">
        <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Demo1">Demo</router-link></li>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "app",
  }
</script>

<style>

</style>