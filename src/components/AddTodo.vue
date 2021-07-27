<template>
  <div class="container">
    <br>
    <h1 class="text-center">Todos App</h1>
    <br>
      <div class="form-group">
        <router-link to="/add" class="link btn btn-danger btn-block form-control">add todo
        <!-- <button v-on:click="addTodo" class="">
        {{cardData ? 'Add Todo': 'Update Todo' }} Add Todo</button> -->
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  // props: ['cardData', 'cardTitle'],
  data () {
    return {
      title: '',
      flag: false,
      isCardSelected: false
    }
  },
  // watch: {
  //   cardData: {
  //     handler: function () {
  //       console.log(this.title, 'testing')
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  computed: {
    testdata: function () {
      return this.flag
    }
  },
  methods: {
  }
}

</script>

<style scoped>
.container{
  padding: 0px
}
.form-group{
  padding: 30px;
}
.link{
  color: black;
}
</style>
