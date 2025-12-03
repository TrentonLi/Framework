<script setup lang="ts">
import CountTo from "@/components/CountTo.vue";

</script>

<template>
  <h1>我是首页</h1>
  <CountTo :startVal="0" :endVal="888" :duration="1000" suffix="+"/>
</template>

<style scoped>

</style>