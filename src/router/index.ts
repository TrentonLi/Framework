import {createRouter, createWebHistory} from 'vue-router';
import {routerBeforeEach} from "./routerHooks.ts";

// 递归匹配三层目录
const modules = import.meta.glob('@/views/**/*.{vue,tsx}');

export const loadView = (path: string) => {
    // 统一格式：去掉结尾 .vue，补齐前缀
    let clean = path.replace(/^\/+/, '').replace(/\.vue$/, '');

    // views 的完整路径
    const full = `/src/views/${clean}.vue`;

    const mod = modules[full];

    if (!mod) {
        console.error(`❌ View not found: ${full}`);
        throw new Error(`View not found: ${full}`);
    }

    return () => mod();
};

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        name: 'Login',
        component: loadView('/Login/index')
    },
    //{path: '/home', component: () => import('@/views/Home/index.vue')},
    {
        path: '/home',
        name: 'Home',
        meta: {
            keepalive: true,
            title: '首页'
        },
        component: loadView('/HomePage/Index')
    },
    {
        path: '/user',
        name: 'User',
        redirect: '/userOne',
        children: [
            {
                path: '/userOne',
                name: 'UserOne',
                meta: {
                    keepalive: true,
                    title: '我是1'
                },
                component: loadView('/User/UserOne')
            },
            {
                path: '/userTwo',
                name: 'UserTwo',
                meta: {
                    keepalive: true,
                    title: '我是2'
                },
                component: loadView('/User/UserTwo')
            },
            {
                path: '/userThree',
                name: 'UserThree',
                meta: {
                    keepalive: true,
                    title: '我是3'
                },
                component: loadView('/User/UserT')
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => routerBeforeEach(to,from, next))

export default router