
 <template>
  <div>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-on:del-todo="deleteTodo" v-bind:todos="todos" :icon="['fas', 'trash']"/>
    <font-awesome-icon :icon="['fas', 'trash']" />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  data () {
    return {
      todos: [
        {
          id: '1',
          title: 'todo 1',
          completed: false
        },
        {
          id: '2',
          title: 'todo 2',
          completed: false
        },
        {
          id: '3',
          title: 'todo 3',
          completed: false
        },
        {
          id: '4',
          title: 'todo 4',
          completed: false
        }
      ]
    }
  },
  components: {
    AddTodo,
    Todos
  },
  methods: {

    addTodo (newTodo) {
      this.todos = [...this.todos, newTodo]
    },
    deleteTodo (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  }
}
</script>
