<template>
    <div class="container">
        <h1 class="text-center">Update Todo</h1>
        <br>
        <form @submit="onSubmit">
       <div class="form-group">
        <input
          required
          type="text"
          v-model="cardTitle"
          placeholder="title"
          name="title"
          id=""
          class="form-control"
        >
       </div>
        <br>
        <router-link to="/"> <button class="btn btn-primary form-control" >Update Todo</button></router-link>
        </form>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['update'])
  }
}
</script>

<style>
.container{
    padding-top: 100px;
}
h1{
    color: rgb(149, 193, 231);
}
</style>
