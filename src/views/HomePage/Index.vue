<script setup lang="ts">
import StatsCard from "@/components/StatsCard.vue";
import CountTo from "@/components/CountTo.vue";

</script>

<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="6">
        <StatsCard
            title="访问量"
        >
          <template #extra>
            <a-tag color="green">日</a-tag>
          </template>
          <template #default>
            <h1>
              <CountTo :startVal="0" :endVal="666" :duration="1000" suffix=""/>
            </h1>
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
            title="销售额"
        >
          <template #extra>
            <a-tag color="orange">周</a-tag>
          </template>
          <template #default>
            <h1>¥
              <CountTo :startVal="0" :endVal="999" :duration="1000" suffix=""/>
            </h1>
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
            title="订单量"
        >
          <template #extra>
            <a-tag color="orange">周</a-tag>
          </template>
          <template #default>
            <h1>
              <CountTo :startVal="0" :endVal="999" :duration="1000" suffix=""/>
            </h1>
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
            title="成交额"
        >
          <template #extra>
            <a-tag color="red">月</a-tag>
          </template>
          <template #default>
            <h1>¥
              <CountTo :startVal="0" :endVal="999" :duration="1000" suffix=""/>
            </h1>
            <div class="content">
              <div>日同比</div>
              <div>周同比</div>
            </div>
          </template>
          <template #footer></template>
        </StatsCard>
      </a-col>
    </a-row>

    <div class="p-4 bg-blue-500 text-white rounded-xl mt-5">
      可以使用 Tailwind v4
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