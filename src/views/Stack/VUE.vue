<script setup lang="ts">
// 无逻辑，仅展示页面
</script>

<template>
  <div class="min-h-auto bg-gray-900 text-white flex flex-col items-center p-10">
    <!-- 标题 -->
    <h1 class="text-5xl font-bold mb-6">Vue 3 介绍</h1>

    <!-- 副标题 -->
    <p class="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
      Vue 3 是一个用于构建用户界面的渐进式框架，拥有更快的渲染速度、更小的体积
      和更灵活的组合式 API。
    </p>

    <!-- 卡片区 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">更快</h2>
        <p class="text-gray-400">基于 Proxy 的响应式系统，大幅提升性能。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">更轻</h2>
        <p class="text-gray-400">更小的运行时、更快的加载速度。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">更灵活</h2>
        <p class="text-gray-400">组合式 API 让逻辑复用和维护更简单。</p>
      </div>
    </div>

    <!-- 按钮跳转官方文档 -->
    <a
        href="https://cn.vuejs.org/"
        target="_blank"
        class="mt-12 px-8 py-3 text-lg bg-green-500 hover:bg-green-600 rounded-xl transition-colors font-medium"
    >
      前往 Vue 3 官方文档
    </a>
  </div>
</template>

<style scoped>
</style>