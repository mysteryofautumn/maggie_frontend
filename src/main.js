import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import Cookies from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);


router.beforeEach((to, from, next) => {
    // console.log(to)
    // console.log(from)
    // console.log(Cookies.get('login'))
    // console.log(Cookies.get('login') === 'false')
    // next()
    // buggy:
    // if ((Cookies.get('login') === 'false' && to.path === '/login') || Cookies.get('login') === 'true') {
    //     next()
    // } else {
    //     next('/login')
    // }
    if (Cookies.get('login') === 'true') {
        next()
    }else if (to.path==='/login') {
        next()
    } else {
        next('/login')
    }
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
