import {defineStore} from "pinia";
interface UserState {
    username: string;
    token: string;
}
export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        username: '',
        token: ''
    }),
    getters: {
        getUsername: (state) => state.username,
        getToken: (state) => state.token
    },
    actions: {
        setUserInfo(username: string, token: string) {
            this.username = username;
            this.token = token;
        },
        //退出
        logout() {
            this.username = '';
            this.token = '';
            localStorage.removeItem('user');
        },
        //初始化
        init() {
            const cache = localStorage.getItem('user');
            if (cache) {
                const data = JSON.parse(cache);
                this.setUserInfo(data.username, data.token);
            }
        }
    }
});