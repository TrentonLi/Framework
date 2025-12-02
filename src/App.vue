<script setup lang="ts">
import Home from './views/Home/index.vue';
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <template v-if="route.name === 'Login'">
    <router-view/>
  </template>
  <template v-else>
    <Home/>
  </template>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
