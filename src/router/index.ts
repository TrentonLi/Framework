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
        path: '/baseTable',
        name: 'BaseTable',
        meta: {
            keepalive: true,
            title: '基础表格'
        },
        component: loadView('/baseTable/Index')
    },

    {
        path: '/stack',
        name: '技术栈',
        redirect: '/vue',
        children: [
            {
                path: '/vue',
                name: 'Vue',
                meta: {
                    keepalive: true,
                    title: 'VUE'
                },
                component: loadView('/Stack/VUE')
            },
            {
                path: '/pinia',
                name: 'Pinia',
                meta: {
                    keepalive: true,
                    title: 'pinia'
                },
                component: loadView('/Stack/Pinia')
            },
            {
                path: '/ant_design_vue',
                name: 'AntDesignVue',
                meta: {
                    keepalive: true,
                    title: 'AntDesignVue'
                },
                component: loadView('/Stack/AntDesignVue')
            },
            {
                path: '/tail_wind',
                name: 'TailWindCss',
                meta: {
                    keepalive: true,
                    title: 'TailWindCss'
                },
                component: loadView('/Stack/TailWindCss')
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