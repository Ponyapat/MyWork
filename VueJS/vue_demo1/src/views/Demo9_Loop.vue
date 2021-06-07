<template>
  <div>
      <!-- v for inline  -->
      <ul>
          <li v-for="(item,index) in ['Angular','Vue','React']" :key="index" >{{item}} </li>
      </ul>

      <hr>

        <!-- v for from return data -->
      <ul>
          <li v-for="(item, index) in mCourses" :key="index">{{item}} </li>
      </ul>

      <hr>

      <ul>
          <li v-for="(item, index) in nCourses" :key="index">{{item.title}} Price {{item.price}} </li>
      </ul>
  
  
  
   
  
  
  </div>
</template>

<script>
export default {
    name: "Demo9",
    data() {
        return {
            mCourses:['iOS',
            'Android',
            'Flutter'],


            nCourses:[
                {title:'iOS', price: 11},
                {title:'Android', price: 12},
                {title:'Flutter', price: 13}
            ]
        }
    },

}
</script>

<style>

</style>