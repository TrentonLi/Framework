<template>
  <CountTo
      :startVal="startVal"
      :endVal="endVal"
      :duration="duration"
      :decimals="decimals"
      :prefix="prefix"
      :suffix="suffix"
  />
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';

defineProps({
  startVal: { type: Number, default: 0 },
  endVal: { type: Number, default: 100 },
  duration: { type: Number, default: 1500 },
  decimals: { type: Number, default: 0 },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
});
</script>