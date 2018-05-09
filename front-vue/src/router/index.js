import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import secret from './secret'
import jwt from 'jwt-simple'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
    var token;
    if (token = localStorage.getItem('token')) {
        let decoded = jwt.decode(token, secret.jwt_secret);
        if (decoded.username !== undefined) {
            //+ TODO: 连接数据库检查用户是否存在。
        }
    }
});

export default router;