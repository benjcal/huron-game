import Vue from 'vue'
import Shell from './Shell.vue'
import './styles/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(Shell),
}).$mount('#shell')
