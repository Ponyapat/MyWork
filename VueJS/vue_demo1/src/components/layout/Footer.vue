<template>
  <div id="footer" class="footer">
      <span :style="{color}"> {{title}} </span>
  </div>
</template>

<script>
export default {
    name: "Footer",
    mounted() {
        setInterval(()=>{
            this.$emit("onClock",Date())
        }, 100)
    },
    props:[
        "title",
        "color"
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