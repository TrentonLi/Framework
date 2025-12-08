<script setup lang="ts">
import {useTabsStore} from "@/stores/tabs.ts";
import {computed} from "vue";
import {useRouter} from "vue-router";
import {MoreOutlined} from '@ant-design/icons-vue';

const router = useRouter();
const TabsStore = useTabsStore();
const emit = defineEmits<{
  (e: 'changeKeys', keys: string[]): void;
}>();

const tabs = computed(() => TabsStore.tabs);
const activeKey = computed(() => TabsStore.activeKey);

function onTabClick(path: string) {
  const usePath = path.replace(/^\//, "");
  emit("changeKeys", [usePath]);
  TabsStore.setActive(path);
  router.push(path);
}

function closeTab(path: string) {
  const current = activeKey.value;
  TabsStore.removeTab(path);

  if (path === current) {
    const newActive = TabsStore.activeKey;
    if (newActive) onTabClick(newActive);
  }
}

function closeAll() {
  TabsStore.clearTabs();
  router.push("/home");
  emit("changeKeys", ["home"]);
}

function closeOthers() {
  TabsStore.keepOnly(activeKey.value);
}

function closeLeft() {
  TabsStore.closeLeft(activeKey.value);
}

function closeRight() {
  TabsStore.closeRight(activeKey.value);
}
</script>
<template>
  <div class="flex mt-1 items-center border-t border-b border-gray-200 overflow-x-auto scrollbar-hide px-1">

    <!-- 单个 Tab -->
    <div
        draggable="true"
        v-for="item in tabs"
        :key="item.path"
        @click="onTabClick(item.path)"
        :class="[
        'flex items-center px-3 mr-1 rounded-lg text-xs cursor-pointer whitespace-nowrap transition-all duration-150 py-1.5',
        item.path === activeKey ? 'bg-blue-600 text-white font-medium shadow-md border border-blue-600' : 'bg-white text-gray-600 border border-transparent hover:bg-gray-100'
      ]"
    >
      <span>{{ item.title }}</span>
      <span
          v-if="item.path !== 'home'"
          @click.stop="closeTab(item.path)"
          :class="[
          'ml-1 text-[11px] cursor-pointer',
          item.path === activeKey ? 'text-white/85 hover:opacity-100' : 'opacity-70 hover:opacity-100 hover:text-black'
        ]"
      >×</span>
    </div>

    <!-- 更多菜单 -->
    <a-dropdown>
      <div class="ml-auto px-2 flex items-center text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">
        <MoreOutlined/>
      </div>

      <template #overlay>
        <a-menu>
          <a-menu-item key="1" @click="closeLeft">关闭左侧</a-menu-item>
          <a-menu-item key="2" @click="closeRight">关闭右侧</a-menu-item>
          <a-menu-item key="3" @click="closeOthers">关闭其他</a-menu-item>
          <a-menu-item key="4" @click="closeAll">关闭全部</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>