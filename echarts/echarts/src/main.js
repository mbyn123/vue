import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'


 Vue.prototype.$echarts = echarts;

Vue.prototype.$echarts = echarts 
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
