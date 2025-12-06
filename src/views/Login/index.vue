<script setup lang="ts">
import Layout from "./Layout.vue";
import {reactive, ref} from 'vue';
import type {FormInstance} from "ant-design-vue";
import {useUserStore} from "@/stores/user.ts";
import {generateToken, toast} from "@/utils/utils.ts";
import {useRouter} from "vue-router";
import type {FormState} from "../../utils/interface.ts";
import {ReasonIdStore} from "@/stores/store.ts";
import {USER} from "@/stores/storeKey.ts";

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
}
const ris = new ReasonIdStore(USER)


//登陆
const loginForm = ref<FormInstance|null>(null);
const userStore = useUserStore();
const router = useRouter();
const Login = async () => {
  if (!loginForm.value) return

  try {
    await loginForm.value.validate()
    userStore.setUserInfo(formState.username, generateToken())
    ris.set(formState.username)
    toast('S', '登录成功')
    await router.push('/home')
  } catch (e) {
    toast('E', '缺少参数!')
  }
}

//跳转注册
const toSignUp = () => {
  console.log('toSignUp')
}
const desText = '没有账号？'


</script>

<template>
  <div class="LoginBox">
    <Layout
        @btnHandle="Login"
        title="登录"
        :desc="desText"
        btnText="登录"
        @descClick="toSignUp"
    >
      <a-form
          ref="loginForm"
          :model="formState"
          name="basic"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          :rules="rules"
      >
        <a-form-item
            label="用户名"
            name="username"
        >
          <a-input placeholder="输入用户名(随便输)" v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
            label="密码"
            name="password"
        >
          <a-input-password placeholder="输入用户密码(随便输)"  v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 14, span: 10 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
      </a-form>
    </Layout>
  </div>
</template>

<style scoped>
@import "./index.css";
</style>