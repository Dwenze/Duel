// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//+ Axios
import axios from 'axios'
axios.interceptors.request.use(
	config => {
		let token = window.localStorage.getItem('auth');
		if (token) {
			config.headers.auth = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error)
	})
//+ jwt
import jwt from 'jwt-simple'
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.$jwt = jwt;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
