<template>
  <div id="footer" class="footer">
      <span> {{title}} </span>
  </div>
</template>

<script>
export default {
    name: "Footer",
    props:[
        "title"
    ]
}
</script>

<style scoped>
.footer{
    font-size: 30px;
    color: black;
    padding-top: 16px;
  }
</style>