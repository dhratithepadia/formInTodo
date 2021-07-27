// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Todos from './components/Todos'
// import AddTodo from './components/AddTodo'
import update from './components/update'
import add from './components/add'
import form from './components/form'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(Vuex)
const routes = [
  {path: '/', component: Todos},
  {path: '/update', component: update},
  {path: '/add', component: add},
  {path: '/form', component: form}
]
const router = new VueRouter({
  routes
})

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  store,
  template: '<App/>'
})
