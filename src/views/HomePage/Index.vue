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
            <p class="text-xl font-bold" ><CountTo :startVal="0" :endVal="999" :duration="2000" suffix=""/></p>
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

    <div class="p-4 bg-blue-500 text-white rounded-xl mt-5 leading-relaxed">
      <div class="font-semibold text-lg mb-1">技术栈：</div>
      <p>Vue 3 + TypeScript + Vite + Pinia + Vue Router + Tailwind CSS</p>

      <div class="font-semibold text-lg mt-4 mb-1">项目简介：</div>
      <p>
        专为轻量后台管理系统打造，结构清晰、可扩展性高，
        适合二次开发与快速搭建中后台项目。
      </p>
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