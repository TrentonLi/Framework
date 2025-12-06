import './assets/styles/main.css'
import {createApp} from 'vue'
import piniaPersist from 'pinia-plugin-persistedstate'
const pinia = createPinia();

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import router from "./router";

import {createPinia} from 'pinia';

//import './style.css'
import App from './App.vue'
import {useUserStore} from "./stores/user.ts";

const app = createApp(App)

pinia.use(piniaPersist)
app
    .use(Antd)
    .use(router)
    .use(pinia)

const user = useUserStore()
user.init()

app.mount('#app')
