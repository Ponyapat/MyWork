<template>
  <div>
      <h1>Data</h1>
      <button @click="count++; isLogged=true;">Count++</button>
      <span>{{count}} </span>
      <div>{{message}} </div>
      <div>{{isLogged}} </div>
      <input type="text" placeholder="Enter Text" v-model="message">
      <h2 v-if="isLogged">Yahoo</h2>
      <div>{{account.username}} {{account.password}} </div>
      <div>{{course[0]}} </div>

      <ul>
          <li class="content" v-for="item in course" :key="item.course">{{item}}</li>
      </ul>

      <span class="title">5555</span>
  </div>
</template>

<script>
export default {
    name: "Demo3",
    mounted() {
        this.message = "Welcome to my world"
    },
    data() {
        return {
            count: 0,
            message: "",
            isLogged: false,
            account: {
                username: "admin",
                password: "1234"
            },
        course: [
            "Vue",
            "React",
            "Flutter",
            "56789"
        ]
        }
    },
}
</script>

<style scoped>

   
    .title{
        color: seagreen;
    }

</style>