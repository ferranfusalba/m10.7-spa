import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/clients',
        name: 'Clients',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "clients" */ '../views/Clients.vue')
    },
    {
        path: '/proveidors',
        name: 'Proveidors',
        component: () =>
            import ( /* webpackChunkName: "proveidors" */ '../views/Proveidors.vue')
    },
    {
        path: '/magatzem',
        name: 'Magatzem',
        component: () =>
            import ( /* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
    },
    {
        path: '/botiga',
        name: 'Botiga',
        component: () =>
            import ( /* webpackChunkName: "botiga" */ '../views/Botiga.vue')
    },
    {
        path: '/botiga/alimentacio',
        name: 'Botiga > Alimentació',
        component: () =>
            import ( /* webpackChunkName: "alimentacio" */ '../views/Alimentacio.vue')
    },
    {
        path: '/botiga/congelats',
        name: 'Botiga > Congelats',
        component: () =>
            import ( /* webpackChunkName: "congelats" */ '../views/Congelats.vue')
    },
    {
        path: '/clients/:name',
        name: 'Client',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "client" */ '../views/Client.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router