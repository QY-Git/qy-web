import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/layouts/Main.vue';
import Home from './views/common/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: Main,
        children: [{
            path: 'home',
            name: 'Home',
            alias: '',
            component: Home
        }]
    }, {
        path: '/blog',
        component: Main,
        children: [{
            path: 'index',
            name: 'BlogIndex',
            alias: '',
            component: () => import('./views/blog/Index.vue')
        }, {
            path: 'show/:id',
            name: 'BlogShow',
            component: () => import('./views/blog/Show.vue')
        }]
    }, {
        path: '/about',
        name: 'about',
        component: () => import('./views/common/About.vue')
    }]
});