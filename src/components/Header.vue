<script setup lang="ts">
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";

const props = defineProps<{
  collapsed: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:collapsed', collapsed: boolean): void;
}>();

const changeCollapsed = () => {
  emits("update:collapsed", !props.collapsed)
};

</script>

<template>
<div class="header" >
  <!--展开隐藏-->
  <div>
    <menu-unfold-outlined
        v-if="props.collapsed"
        class="trigger"
        @click="changeCollapsed"
    />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed" />
  </div>

</div>
</template>

<style scoped>
.header{
  width: 100%;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>