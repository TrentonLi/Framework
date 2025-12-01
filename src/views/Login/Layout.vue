/**
 * @Author: 阿祖
 * @Date: 2025-12-01 14:37:32
 * @LastEditors: 阿祖
 * @Description: 登录或注册Layout
 */
<script setup lang="ts">

const { title, desc, btnText } = defineProps<{
  title: String;
  desc: String;
  btnText: String;
}>();
const emits = defineEmits<{
  (e: 'btnHandle'): void;
  (e: 'descClick', v: Event): void;
}>();
const handle = () => emits("btnHandle");
const descClick = (e: Event) => emits("descClick", e);
</script>

<template>
  <div class="layout_card">
    <!--  标题-->
    <div class="layout_tit">{{ title }}</div>
    <!--  简介-->
    <p v-html="desc" @click="descClick($event)" class="layout_des pointer"></p>
    <!--  插槽-->
    <slot></slot>
    <!--  确认按钮-->
    <AButton style="width: 80%" size="large" type="primary" @click="handle">
      {{ btnText }}
    </AButton>
  </div>
</template>

<style scoped>
@import "index.css";
</style>