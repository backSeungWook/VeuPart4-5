import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vue-masonry'
import router from './router'//라우터 연결 
import store from './store'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
