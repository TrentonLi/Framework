import { useTabsStore } from "../stores/tabs.ts";
import {
    type RouteLocationNormalizedGeneric,
    type RouteLocationNormalizedLoaded
} from "vue-router";
import { reactive } from "vue";
import type { TabItem } from "../utils/interface.ts";
import { useUserStore } from "../stores/user.ts";

// 白名单：无需 token，可以自由访问
const WHITE_LIST = ["/login", "/register", "/forget"];

export const routerBeforeEach = (
    to: RouteLocationNormalizedGeneric,
    from: RouteLocationNormalizedLoaded,
    next: (to?: any) => void
) => {
    const tabsStore = useTabsStore();
    const userStore = useUserStore();
    const token = userStore.token;

    const isInWhiteList = WHITE_LIST.includes(to.path);

    // 1. 如果没有 token，且访问的不是白名单，则强制跳登录
    if (!token && !isInWhiteList) {
        return next({ path: "/login" });
    }

    // 2. 白名单页面不加入 tab，例如登录、注册等页面
    if (!isInWhiteList) {
        const tab: TabItem = reactive({
            path: to.path,
            title: (to.meta.title as string) ?? "未命名",
        });
        tabsStore.addTab(tab);
    }

    next();
};