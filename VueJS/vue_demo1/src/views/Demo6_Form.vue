<template>
  <div  id="demo6">
      <form >
          <div>
              <label for="first_name">Firstname</label>
              <input type="text" name="first_name" v-model="applicant.first_name">
          </div>

          <div>
              <label for="last_name">Lastname</label>
              <input type="text" name="last_name" v-model="applicant.last_name">
          </div>
      


      <div>
          <label for="sex">Male</label>
          <input type="radio" name="sex" value="male" v-model="applicant.sex">

          <label for="sex">Female</label>
          <input type="radio" name="sex" value="female" v-model="applicant.sex">
      </div>


      <div>
          <select name="course" v-model="applicant.course">
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
          </select>
      </div>

      <button type="button" @click="clear">Clear</button>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "Demo6",
    data() {
        return {
            applicant: {
                first_name: "",
                last_name: "",
                sex: "male",
                course: "Vue"
            }
        };
    },

        methods: {
            clear(){
                this.applicant = {
                    applicant: {
                first_name: "",
                last_name: "",
                sex: "male",
                course: "Vue"
                }
            }
        }
    }
}
</script>

<style>

</style>