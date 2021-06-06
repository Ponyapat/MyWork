<template>
  <div id="demo7">
      <Clock>
          <span style="color:red">เวลาปัจจุบัน</span>
      </Clock>

      <Clock>
          <span style="color:Blue">Current Time</span>
      </Clock>


        <!-- Using fallback content -->
      <Clock/>


      <Clock>
          <span style="color:green">Current Time</span>

            <template v-slot:header>
                <h1>Header</h1>
            </template>

            <template v-slot:footer>
                <h3>Footer</h3>   
            </template>
          
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