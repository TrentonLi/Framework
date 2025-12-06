<script setup lang="ts">
import Home from './views/Home/index.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// 路由白名单：不需要展示 Home（Layout）的页面
const WHITE_LIST = ['Login', 'Register', 'Forget'];

const route = useRoute();

// 是否属于白名单路由
const isWhitePage = computed(() => WHITE_LIST.includes(route.name as string));
</script>

<template>
  <!-- 白名单页面：直接渲染子路由 -->
  <router-view v-if="isWhitePage" />

  <!-- 其他页面：外层套 Home 布局 -->
  <Home v-else />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>