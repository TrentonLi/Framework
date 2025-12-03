<script setup lang="ts">
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import {UserOutlined} from "@ant-design/icons-vue";
import {ReasonIdStore} from "@/stores/store.ts";
import {USER} from "@/stores/storeKey.ts";
import {useUserStore} from "@/stores/user.ts";
import {useRouter} from "vue-router";

const props = defineProps<{
  collapsed: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:collapsed', collapsed: boolean): void;
}>();

const changeCollapsed = () => {
  emits("update:collapsed", !props.collapsed)
};

const ris = new ReasonIdStore(USER)
const store = useUserStore()
const router = useRouter()

//退出登录
const LogOut = () =>{
  ris.remove()
  store.logout()
  router.replace('/login')
}

</script>

<template>
  <div class="header">
    <!--展开隐藏-->
    <div>
      <menu-unfold-outlined
          v-if="props.collapsed"
          class="trigger font"
          @click="changeCollapsed"
      />
      <menu-fold-outlined v-else class="trigger font" @click="changeCollapsed"/>
    </div>
    <!--用户信息-->
    <div class="trigger userInfo">
      <UserOutlined/>

      <a-popover placement="topRight">
        <template #content>
          <div @click="LogOut" class="logOut" >
            <span>退出登录</span>
          </div>
        </template>
        <span>{{ ris.get() }}</span>
      </a-popover>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.font{
  font-size: 18px;
}

.userInfo{
  font-size: 25px;
  font-weight: bold;
}

.trigger {
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: all 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logOut{
  font-size: 18px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.logOut:hover {
  color: #1890ff;
}
</style>