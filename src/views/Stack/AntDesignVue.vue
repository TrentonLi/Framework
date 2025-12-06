<script setup lang="ts">
// 无逻辑，仅展示页面
</script>

<template>
  <div class="min-h-auto bg-gray-900 text-white flex flex-col items-center p-10">
    <!-- 标题 -->
    <h1 class="text-5xl font-bold mb-6">Ant Design Vue</h1>

    <!-- 副标题 -->
    <p class="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
      Ant Design Vue 是基于 Ant Design 的 Vue 组件库，提供现代、优雅、开箱即用的高质量 UI 组件，
      适用于后台管理系统、企业级应用等场景。
    </p>

    <!-- 特性卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">丰富组件</h2>
        <p class="text-gray-400">提供大量成熟的企业级 UI 组件，可快速构建完整界面。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">一致的设计语言</h2>
        <p class="text-gray-400">沿袭 Ant Design 的设计体系，视觉统一且专业。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">开发友好</h2>
        <p class="text-gray-400">良好的文档、类型支持，配合 Vue3 表现更优秀。</p>
      </div>
    </div>

    <!-- 按钮跳转官方文档 -->
    <a
        href="https://www.antdv.com/components/overview/"
        target="_blank"
        class="mt-12 px-8 py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors font-medium"
    >
      前往 Ant Design Vue 官方文档
    </a>
  </div>
</template>

<style scoped>
</style>