import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => {
    return state.todos
  }
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
  },
  async deleteTodo ({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  },
  async updateTodo ({ commit }, updatedTodo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)

    commit('updateTodo', response.data)
  },
  async add ({commit}, title) {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
      { title: title, completed: false })

    commit('add', response.data)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo: (state, id) => { state.todos = state.todos.filter((todo) => todo.id !== id) },
  updateTodo: (state, updatedTodo) => {
    // Find index
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  },
  add: (state, newTodo) => state.todos.unshift(newTodo)
}

export default {
  state,
  getters,
  actions,
  mutations
}
