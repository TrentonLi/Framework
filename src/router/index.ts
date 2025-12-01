import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {path: '/home', component: () => import('@/views/Home/index.vue')},
    {path: '/login', component: () => import('@/views/Login/index.vue')},
]

export default createRouter({
    history: createWebHistory(),
    routes,
})