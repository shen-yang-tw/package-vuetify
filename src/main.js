import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//Set this to false to prevent the production tip on Vue startup: https://vuejs.org/v2/api/index.html#productionTip
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
