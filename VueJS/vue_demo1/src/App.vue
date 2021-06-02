<template>
  <div>
    <h1>v-model</h1>
    <!-- MVVM -->
    <input v-model="message" type="text" placeholder="Enter your text">
    <div>
      {{message}}
    </div>

    <button @click="message=''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message:""
    }
  },

}
</script>

<style>

</style>