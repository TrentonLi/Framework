<script setup lang="ts">
import StatsCard from "@/components/StatsCard.vue";
import CountTo from "@/components/CountTo.vue";

</script>

<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="6">
        <StatsCard
            title="随便吧"
        >
          <template #extra>
            <a-tag color="green">日</a-tag>
          </template>
          <template #default>
            <p class="text-xl font-bold">
              <CountTo :startVal="0" :endVal="666" :duration="2000" suffix=""/>
            </p>
            <div class="content">
              <div>日同比</div>
              <div>周同比</div>
            </div>
          </template>
          <template #footer></template>
        </StatsCard>
      </a-col>
      <a-col :span="6">
        <StatsCard
            title="无所谓"
        >
          <template #extra>
            <a-tag color="orange">周</a-tag>
          </template>
          <template #default>
            <p class="text-xl font-bold">
              <span>¥</span>
              <CountTo :startVal="0" :endVal="888" :duration="2000" suffix=""/>
            </p>
            <div class="content">
              <div>日同比</div>
              <div>周同比</div>
            </div>
          </template>
          <template #footer></template>
        </StatsCard>
      </a-col>
      <a-col :span="6">
        <StatsCard
            title="爱谁谁"
        >
          <template #extra>
            <a-tag color="orange">周</a-tag>
          </template>
          <template #default>
            <p class="text-xl font-bold">
              <CountTo :startVal="0" :endVal="999" :duration="2000" suffix=""/>
            </p>
            <div class="content">
              <div>日同比</div>
              <div>周同比</div>
            </div>
          </template>
          <template #footer></template>
        </StatsCard>
      </a-col>
      <a-col :span="6">
        <StatsCard
            title="我不会"
        >
          <template #extra>
            <a-tag color="red">月</a-tag>
          </template>
          <template #default>
            <p class="text-xl font-bold">
              <span>¥</span>
              <CountTo :startVal="0" :endVal="54321" :duration="2000" suffix=""/>
            </p>
            <div class="content">
              <div>日同比</div>
              <div>周同比</div>
            </div>
          </template>
          <template #footer></template>
        </StatsCard>
      </a-col>
    </a-row>

    <div class="p-5 rounded-xl mt-5 bg-white shadow-sm border border-gray-200 leading-relaxed text-gray-700">
      <div class="font-semibold text-lg mb-1 text-gray-900">技术栈：</div>
      <p>Vue 3 + TypeScript + Vite + Pinia + Vue Router + Tailwind CSS</p>

      <div class="font-semibold text-lg mt-4 mb-1 text-gray-900">项目简介：</div>
      <p>
        专为轻量后台管理系统打造，结构清晰、可扩展性高，
        适合二次开发与快速搭建中后台项目。
      </p>

      <div class="font-semibold text-lg mt-4 mb-1 text-gray-900">使用说明：</div>
      <p class="mb-2">基于本框架创建新项目：</p>

      <div class="bg-gray-100 rounded-lg p-3 text-sm font-mono whitespace-pre-wrap text-gray-800">
        degit TrentonLi/Framework my-project
      </div>

      <p class="mt-2">然后运行：</p>
      <div class="bg-gray-100 rounded-lg p-3 text-sm font-mono whitespace-pre-wrap text-gray-800">
        cd my-project<br>
        pnpm install<br>
        pnpm dev
      </div>

      <p class="mt-3">即可开始全新项目开发。</p>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  color: #989898;
  font-size: 12px;
}
</style>