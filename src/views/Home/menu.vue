<script setup lang="ts">
import {MenuList} from "@/router/MenuList.ts";

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
            <div class="flex items-center gap-2">
              <component :is="item.icon" class="text-base"/>
              <span>{{ item.label }}</span>
            </div>
          </template>

          <a-menu-item
              v-for="child in item.children"
              :key="child.key"
          >
            <div class="flex items-center gap-2">
              <span>{{ child.label }}</span>
            </div>
          </a-menu-item>
        </a-sub-menu>
      </template>

      <!-- 普通菜单 -->
      <template v-else>
        <a-menu-item :key="item.key">
          <div class="flex items-center gap-2">
            <component :is="item.icon" class="text-base"/>
            <span>{{ item.label }}</span>
          </div>
        </a-menu-item>
      </template>

    </template>
  </a-menu>
</template>