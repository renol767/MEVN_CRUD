import Vue from 'vue'
import App from './App.vue'

// Import Router
import router from './router';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
