<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
});

</script>

<template>
  <div class="card">
    <a-card :bordered="true">
      <template #title>
        {{props.title}}
      </template>
      <template #extra>
        <slot name="extra" />
      </template>
      <template #default>
        <slot name="default" />
      </template>
      <template #actions>
        <slot name="footer" />
      </template>
    </a-card>
  </div>
</template>

<style scoped>
.card {
  /*box-shadow: 0 10px 10px 10px #ECECEC;*/
}
</style>