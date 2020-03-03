import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import Rooms from './components/Rooms.vue'
import MainPage from './components/MainPage.vue'
Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/rooms', name:"rooms", component: Rooms },
  {path: '/', name:'home', component: MainPage}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
