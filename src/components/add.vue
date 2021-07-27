<template>
    <div class="container">
        <h1 class="text-center">Add Todo</h1>
        <br>
        <form @submit.prevent="addTodo">
       <div class="form-group">
        <input
          required
          type="text"
          placeholder="title"
          name="title"
          id=""
          v-model="title"
          class="form-control"/>
       </div>
        <br>
         <button type="submit" class="btn btn-primary form-control" >Add Todo</button>
        </form>
        </div>
</template>

<script>
import store from '../store'
import { mapActions } from 'vuex'
console.log()
export default {
  store,
  name: 'add',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['add']),
    // onSubmit (event) {
    //   event.preventDefault()
    //   this.addTodo(this.title)
    //   this.title = ''
    // },
    // addTodo (newTodo) {
    //   this.todos = [...this.todos, newTodo]
    //   console.log(this.todos)
    // }
    // add () {
    //   this.$router.push({name: '/', params: {data: this.add}})
    //   console.log(this.data)
    // }
    // addTodo (newTodo) {
    //   this.todos = [...this.todos, newTodo]
    // }
    addTodo () {
    //   this.$store.state.todos.push(this.title)
      this.$store.commit('CHANGE_VAL')
      console.log(this.$store.state.todos)
    //   console.log(this.title)
    }
  }
}
</script>

<style>
.container{
    padding-top: 100px;
}
</style>
