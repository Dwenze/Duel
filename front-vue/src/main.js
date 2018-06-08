// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

//+ Axios
import axios from 'axios'
axios.interceptors.request.use(
	config => {
		if (config.url == '/') {
			//TODO
		}
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
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
