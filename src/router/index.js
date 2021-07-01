/*
 * @Author: your name
 * @Date: 2021-04-10 18:42:28
 * @LastEditTime: 2021-04-12 10:25:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \付-豆瓣e:\作业131\Vue\douban\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: 'Home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/audio_b',
        name: 'Audio_b',
        component: () =>
            import ( /* webpackChunkName: "audio_b" */ '../views/audio_b.vue'),
        children: [{
            path: 'movie',
            component: () =>
                import ("../components/audio_b/movie.vue"),
        }, {
            path: 'book',
            component: () =>
                import ("../components/audio_b/book.vue"),
        }, {
            path: 'tv',
            component: () =>
                import ("../components/audio_b/tv.vue"),
        }, {
            path: 'city',
            component: () =>
                import ("../components/audio_b/city.vue"),
        }, {
            path: 'music',
            component: () =>
                import ("../components/audio_b/music.vue"),
        }, ]


    },
    {
        path: '/broadcast',
        name: 'Broadcast',
        component: () =>
            import ( /* webpackChunkName: "broadcast" */ '../views/broadcast.vue')
    },
    {
        path: '/group',
        name: 'Group',
        component: () =>
            import ( /* webpackChunkName: "group" */ '../views/group.vue')
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () =>
            import ( /* webpackChunkName: "mine" */ '../views/mine.vue'),
        beforeEnter(to, from, next) {
            if (!sessionStorage.getItem('token')) {
                next({ name: 'Login' })
            } else {
                next()
            }
        }
    },

]

const router = new VueRouter({
    routes
})

export default router