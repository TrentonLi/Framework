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

// tabs 列表
const tabs = computed(() => TabsStore.tabs);

// 当前激活 tab
const activeKey = computed(() => TabsStore.activeKey);

// 切换 tab
function onTabClick(path: string) {
  const usePath = path.replace(/^\//, "");
  emit("changeKeys", [usePath]);
  TabsStore.setActive(path);
  router.push(path);
}

// 关闭单个 tab
function closeTab(path: string) {
  const current = activeKey.value;

  // 先移除
  TabsStore.removeTab(path);

  // 如果关闭的是当前 tab，则切换到新的 activeKey
  if (path === current) {
    const newActive = TabsStore.activeKey;

    // 防止 undefined 传入 onTabClick
    if (newActive) {
      onTabClick(newActive);
    }
  }
}

// =============== 批量菜单功能 ===============

// 关闭全部
function closeAll() {
  TabsStore.clearTabs();
  router.push("/home");
  emit("changeKeys", ["home"]);
}

// 关闭其他
function closeOthers() {
  TabsStore.keepOnly(activeKey.value);
}

// 关闭左侧
function closeLeft() {
  TabsStore.closeLeft(activeKey.value);
}

// 关闭右侧
function closeRight() {
  TabsStore.closeRight(activeKey.value);
}
</script>

<template>
  <div class="tabs">

    <!-- 单个 Tab -->
    <div
        class="tab-item"
        v-for="item in tabs"
        :key="item.path"
        :class="{ active: item.path === activeKey }"
        @click="onTabClick(item.path)"
    >
      <span>{{ item.title }}</span>

      <span
          v-if="item.path !== 'home'"
          class="close"
          @click.stop="closeTab(item.path)"
      >×</span>
    </div>

    <!-- 右侧更多菜单 -->
    <a-dropdown>
      <div class="more-menu">
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
/* Tabs 容器 */
.tabs {
  display: flex;
  align-items: center;
  height: 35px;
  background: #fff;
  padding: 0 6px;
  border-bottom: 1px solid #e5e7eb;
  border-top: 1px solid #f1f1f1;
  overflow-x: auto;
  scrollbar-width: none;
}

.tabs::-webkit-scrollbar {
  display: none;
}

/* 单个 Tab */
.tab-item {
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 10px;
  margin-right: 6px;
  font-size: 12px;
  background: #f6f6f6;
  border-radius: 6px;
  cursor: pointer;
  color: #555;
  transition: all 0.18s ease;
  white-space: nowrap;
  border: 1px solid transparent;
}

.tab-item:hover {
  background: #ececec;
}

.tab-item.active {
  background: #1677ff;
  border-color: #1677ff;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.25);
}

/* 关闭按钮 */
.close {
  margin-left: 6px;
  font-size: 11px;
  cursor: pointer;
  opacity: 0.7;
}

.tab-item:not(.active) .close:hover {
  color: #000;
  opacity: 1;
}

.tab-item.active .close {
  color: rgba(255, 255, 255, 0.85);
}

.tab-item.active .close:hover {
  opacity: 1;
}

/* 更多菜单按钮 */
.more-menu {
  margin-left: auto;
  padding: 0 8px;
  cursor: pointer;
  color: #666;
  transition: 0.2s;
  display: flex;
  align-items: center;
}

.more-menu:hover {
  color: #1677ff;
}
</style>