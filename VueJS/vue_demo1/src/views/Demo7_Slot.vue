<template>
  <div id="demo7">
      <Clock>
          <span style="color:red">เวลาปัจจุบัน</span>
      </Clock>

      <Clock>
          <span style="color:Blue">Current Time</span>
      </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helper/Clock.vue";
export default {
    name: "Demo7",
    components: {
        Clock
    }
}
</script>

<style>

</style>