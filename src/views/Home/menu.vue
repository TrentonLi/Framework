<script setup lang="ts">
import {MenuList} from "../../router/MenuList.ts";

const props = defineProps<{
  selectedKeys: string[];
}>();

const emit = defineEmits<{
  (e: 'update:selectedKeys', keys: string[]): void;
}>();

const updateSelectedKeys = (keys: string[]) => {
  emit('update:selectedKeys', keys);
};
</script>

<template>
  <a-menu
      :selectedKeys="props.selectedKeys"
      @update:selectedKeys="updateSelectedKeys"
      theme="dark"
      mode="inline"
  >
    <template v-for="item in MenuList" :key="item.key">
      <!-- 子菜单 -->
      <template v-if="item.children">
        <a-sub-menu :key="item.key">
          <template #title>
      <span>
        <component :is="item.icon"/>
        <span>{{ item.label }}</span>
      </span>
          </template>

          <a-menu-item
              v-for="child in item.children"
              :key="child.key"
          >
            {{ child.label }}
          </a-menu-item>
        </a-sub-menu>
      </template>

      <!-- 普通菜单 -->
      <template v-else>
        <a-menu-item :key="item.key">
          <component :is="item.icon"/>
          <span>{{ item.label }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>