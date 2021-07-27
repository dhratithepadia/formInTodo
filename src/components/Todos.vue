<template>
  <div>
    <!-- <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todos="todos"
      v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div> -->
    <AddTodo />
    <!-- v-on:add-todo="addTodo" :cardData="res" :cardTitle="title" -->
        <div class="todos">
        <div  v-for="todo in allTodos" class="todo" :key="todo.id">
          <router-link to="/update" class="link">{{ todo.title }}</router-link>
          <button class="btn btn-danger" v-on:click="deleteTodo(todo.id)">Del</button>
          <button class="btn btn-primary" v-on:click="deleteTodo(todo.id)">edit</button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'
import add from './add.vue'
import update from './update.vue'
export default {
  name: 'Todos',
  components: {
    AddTodo,
    add,
    update
  },
  data () {
    return {
      res: {},
      title: ''
    }
  },
  computed: mapGetters(['allTodos']),
  created () {
    this.fetchTodos()
    this.todos = this.$route.params.data
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo'])
    // onClick (todo) {
    //   this.flag = !this.flag
    //   todo['isCardSelected'] = this.flag
    //   this.title = todo.title
    //   this.res = this.flag
    //   console.log(todo)
    // },
    // addTodo (newTodo) {
    //   this.todos = [...this.todos, newTodo]
    // }
  }
}
</script>
<style scoped>
.link{
  color: white;
}
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid rgb(248, 245, 245);
    background: rgb(125, 176, 235);
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    color: #fff;
    background: #35495e;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>
