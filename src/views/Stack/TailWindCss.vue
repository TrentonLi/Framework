<script setup lang="ts">
// 无逻辑，仅展示页面
</script>

<template>
  <div class="min-h-auto bg-gray-900 text-white flex flex-col items-center p-10">
    <!-- 标题 -->
    <h1 class="text-5xl font-bold mb-6">Tailwind CSS</h1>

    <!-- 副标题 -->
    <p class="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
      Tailwind CSS 是一个实用类优先的 CSS 框架，通过原子化类名快速构建现代 UI，
      无需编写额外的样式文件，拥有高自由度与极高的开发效率。
    </p>

    <!-- 特性卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">原子化类名</h2>
        <p class="text-gray-400">无需写 CSS，仅通过类名即可快速构建界面。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">极高灵活性</h2>
        <p class="text-gray-400">随时组合，即写即用，不受组件封装限制。</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-2xl font-semibold mb-3">优秀的暗黑模式与响应式</h2>
        <p class="text-gray-400">内置响应式、hover、dark 模式等关键特性。</p>
      </div>
    </div>

    <!-- 按钮跳转官方文档 -->
    <a
        href="https://tailwindcss.com/"
        target="_blank"
        class="mt-12 px-8 py-3 text-lg bg-cyan-500 hover:bg-cyan-600 rounded-xl transition-colors font-medium"
    >
      前往 Tailwind CSS 官方文档
    </a>
  </div>
</template>

<style scoped>
</style>