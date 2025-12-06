<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue";
import { ReasonIdStore } from "@/stores/store.ts";
import { USER } from "@/stores/storeKey.ts";
import { useUserStore } from "@/stores/user.ts";
import { useRouter } from "vue-router";
import { ref } from "vue";

const props = defineProps<{
  collapsed: boolean;
}>();

const emits = defineEmits<{
  (e: "update:collapsed", collapsed: boolean): void;
}>();

const changeCollapsed = () => {
  emits("update:collapsed", !props.collapsed);
};

const ris = new ReasonIdStore(USER);
const store = useUserStore();
const router = useRouter();

//退出登录
const LogOut = () => {
  ris.remove();
  store.logout();
  router.replace("/login");
};

// 全屏相关
const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (!isFullScreen.value) {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if ((docElm as any).mozRequestFullScreen) {
      (docElm as any).mozRequestFullScreen();
    } else if ((docElm as any).webkitRequestFullscreen) {
      (docElm as any).webkitRequestFullscreen();
    } else if ((docElm as any).msRequestFullscreen) {
      (docElm as any).msRequestFullscreen();
    }
    isFullScreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    isFullScreen.value = false;
  }
};
</script>

<template>
  <div class="w-full flex items-center justify-between px-6 h-16 bg-white shadow-sm">

    <!-- 左侧图标 -->
    <div>
      <menu-unfold-outlined
          v-if="props.collapsed"
          class="cursor-pointer text-xl hover:text-blue-500 transition"
          @click="changeCollapsed"
      />
      <menu-fold-outlined
          v-else
          class="cursor-pointer text-xl hover:text-blue-500 transition"
          @click="changeCollapsed"
      />
    </div>

    <!-- 右侧用户信息 + 全屏 -->
    <div class="flex items-center space-x-4 text-lg cursor-pointer">

      <!-- 全屏按钮 -->
      <component
          :is="isFullScreen ? FullscreenExitOutlined : FullscreenOutlined"
          class="cursor-pointer text-xl hover:text-blue-500 transition"
          @click="toggleFullScreen"
      />

      <!-- 用户信息 -->
      <UserOutlined class="text-2xl" />

      <a-popover placement="topRight">
        <template #content>
          <div
              @click="LogOut"
              class="text-center py-2 px-4 text-base cursor-pointer hover:text-blue-500 transition"
          >
            退出登录
          </div>
        </template>

        <span class="font-semibold">{{ store.username }}</span>
      </a-popover>

    </div>

  </div>
</template>

<style scoped>
</style>