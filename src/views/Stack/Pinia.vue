<script setup lang="ts">
// 无逻辑，仅展示页面
</script>

<template>
  <div class="min-h-auto bg-gray-900 text-white flex flex-col items-center p-10">
    <!-- 标题 -->
    <h1 class="text-5xl font-bold mb-6">Pinia 状态管理</h1>

    <!-- 副标题 -->
    <p class="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
      Pinia 是 Vue3 官方推荐的新一代状态管理库，拥有更轻、更快、更易上手的特点，
      完美替代 Vuex，提供极佳的开发体验。
    </p>

    <!-- 特性卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">类型友好</h2>
        <p class="text-gray-400">完全为 TypeScript 设计，类型推导清晰自然。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">学习成本低</h2>
        <p class="text-gray-400">API 简洁直观，不再有 Vuex 的复杂模板代码。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">开发体验优秀</h2>
        <p class="text-gray-400">支持热更新、插件扩展，调试体验更强。</p>
      </div>
    </div>

    <!-- 按钮跳转官方文档 -->
    <a
        href="https://pinia.vuejs.org/"
        target="_blank"
        class="mt-12 px-8 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 rounded-xl transition-colors font-medium"
    >
      前往 Pinia 官方文档
    </a>
  </div>
</template>

<style scoped>
</style>