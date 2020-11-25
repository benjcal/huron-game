import Vue from 'vue'
import Main from './Main.vue'
import './styles/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#shell')
