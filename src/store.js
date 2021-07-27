import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: 1
  },
  mutations: {
    CHANGE_VAL (state) {
      state.todos++
      // state.todos.push(title)
    }
  }
})
