import {useTabsStore} from "../stores/tabs.ts";
import {type RouteLocationNormalizedGeneric,type RouteLocationNormalizedLoaded} from "vue-router";
import {reactive} from "vue";
import type {TabItem} from "../utils/interface.ts";

export const routerBeforeEach = (to: RouteLocationNormalizedGeneric, from : RouteLocationNormalizedLoaded, next:fun) => {

    const routeTab = useTabsStore();

    const routePath = to.path
    const routeTitle = (to.meta.title ?? '未命名') as s
    const tabSentry = reactive<TabItem>({
        path: routePath,
        title: routeTitle,
    })

    routeTab.addTab(tabSentry)

    next()
}