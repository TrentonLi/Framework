import {defineStore} from 'pinia'
import type {TabItem} from '../utils/interface'

export const useTabsStore = defineStore('tabs', {
    state: (): {
        tabs: TabItem[]
        activeKey: string
    } => ({
        tabs: [],
        activeKey: ''
    }),

    actions: {
        setActive(path: string) {
            this.activeKey = path;
        },
        /** 添加标签 */
        addTab(item: TabItem) {
            const exists = this.tabs.some(tab => tab.path === item.path)

            if (!exists) {
                this.tabs.push({
                    title: item.title,
                    path: item.path,
                    closable: item.closable ?? true
                })
            }

            // 切换到新增的 tab
            this.activeKey = item.path
        },

        /** 删除标签 */
        removeTab(path: string) {
            const index = this.tabs.findIndex(t => t.path === path)

            if (index === -1) return

            // 删除 tab
            this.tabs.splice(index, 1)

            // 如果删除的是当前 tab，则切换到前一个
            if (this.activeKey === path) {
                const nextTab = this.tabs[index - 1] || this.tabs[0]
                if (nextTab) {
                    this.activeKey = nextTab.path
                } else {
                    this.activeKey = ''
                }
            }
        },

        // 清空全部
        clearTabs() {
            this.tabs = [];
            this.activeKey = "home";
        },

        // 保留当前
        keepOnly(path: string) {
            this.tabs = this.tabs.filter(t => t.path === path);
            this.activeKey = path;
        },
        // 关闭左侧
        closeLeft(current: string) {
            const index = this.tabs.findIndex(t => t.path === current);
            if (index > 0) this.tabs.splice(0, index);
        },
        // 关闭右侧
        closeRight(current: string) {
            const index = this.tabs.findIndex(t => t.path === current);
            if (index !== -1) this.tabs.splice(index + 1);
        },
    },

    /** 持久化（pinia-plugin-persist） */
    persist: {
        key: 'tabs',
        storage: localStorage,
        //paths: ['tabs', 'activeKey']
    }
})