<template>
  <div class="container">
    <br />
    <h1 class="text-center">Todos App</h1>
    <br /><br />
    <form @submit="onSubmit">
      <div class="form-group">
        <input
          required
          type="text"
          v-model="title"
          placeholder="title"
          name="title"
          id=""
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-danger btn-block">
          Add Todo
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit (event) {
      event.preventDefault()
      this.addTodo(this.title)

      this.title = ''
    }
  }
}
</script>

<style scoped>
.form-group{
  padding: 5px;
}
</style>
