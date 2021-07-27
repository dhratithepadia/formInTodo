
 <template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
// import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    // AddTodo,
    Todos
  },
  methods: {
    addTodo (newTodo) {
      this.todos = [...this.todos, newTodo]
    }
  }
}
</script>
