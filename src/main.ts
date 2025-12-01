import {createApp} from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import router from "./router";

import {createPinia} from 'pinia';

//import './style.css'
import App from './App.vue'
import {useUserStore} from "./stores/user.ts";

const app = createApp(App)


app
    .use(Antd)
    .use(router)
    .use(createPinia())

const userStore = useUserStore();
userStore.init();

app.mount('#app')
