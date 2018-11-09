import Vue from 'vue'
import Router from 'vue-router'
import routes from './modules/routes'
import config from './configs'
console.log('2');
console.log(config.get('defaultPage'));

Vue.use(Router);

export default new Router({
    routes: routes/*[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(
            // webpackChunkName: "about"
            './views/About.vue')
        }
    ]*/
});
