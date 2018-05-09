// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//+ Axios
import axios from 'axios'
//+ jwt
import jwt from 'jwt-simple'
//+ secret key file
import secret from './router/secret'

Vue.prototype.$http = axios;
Vue.prototype.$jwt = jwt;
Vue.prototype.$secret = secret;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
