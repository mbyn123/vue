import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
Vue.use(Vuex)

//引入store实例
Vue.prototype.$store = store

//全局导航守卫
router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
      next()
  } else {
      next({
          path: "/login"
      })
  }
})


// const store = new Vuex.Store({
//   state:{
//     count:0
//   },
//   //定义修改数据state的方法
//   mutations:{
  
//     countIncrease(state,v){
//       state.count = v
//     }
//   }
// })
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
