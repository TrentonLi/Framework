import { defineStore } from "pinia";
import type { UserState } from "../utils/interface.ts";

export const useUserStore = defineStore("user", {
    state: (): UserState => ({
        username: "",
        token: null,
        expireTime: null, // 新增：token 过期时间戳
    }),

    getters: {
        getUsername: (state) => state.username,
        getToken: (state) => state.token,
        isExpired: (state) => {
            if (!state.expireTime) return true;
            return Date.now() > state.expireTime;
        },
    },

    actions: {
        // 设置用户信息（写入 token 过期时间）
        setUserInfo(username: string, token: string) {
            this.username = username;
            this.token = token;

            // token 有效期 1 天（24 小时）
            this.expireTime = Date.now() + 24 * 60 * 60 * 1000;
        },

        // 退出登录
        logout() {
            this.username = "";
            this.token = null;
            this.expireTime = null;
            localStorage.removeItem("user");
        },

        // 初始化时检查 token 是否过期
        init() {
            if (this.isExpired) {
                this.logout();
            }
        },
    },

    // ⭐ 持久化配置
    persist: {
        key: "user",
        storage: localStorage,
    },
});