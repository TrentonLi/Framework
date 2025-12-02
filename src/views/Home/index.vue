<template>
  <a-layout :style="{height: '100vh'}">
    <!--左-->
    <a-layout-sider
        :style="{ overflow: 'auto',}"
        v-model:collapsed="collapsed" :trigger="null" collapsible
    >
      <!--logo-->
      <Logo/>
      <!--菜单-->
      <Menu
          v-model:selectedKeys="selectedKeys"
      />
    </a-layout-sider>
    <!--右-->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header v-model:collapsed="collapsed"/>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '20px', background: '#fff', minHeight: '280px',overflow: 'auto' }"
      >
        <Content/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';
import Menu from './menu.vue'
import Logo from "./Logo.vue";
import Header from "../../components/Header.vue";
import Content from "./Content.vue";
import {useRouter} from "vue-router";
import {ReasonIdStore} from "@/stores/store.ts";
import {CURRENT_TAB} from "@/stores/storeKey.ts";

const ris = new ReasonIdStore(CURRENT_TAB)
const stored = ris.get();

const selectedKeys = ref<string[]>(stored ? stored : ['home']);
const collapsed = ref<boolean>(false);
const router = useRouter();

watch(selectedKeys, (val: string[]) => {
  console.log('selectedKeys changed:', val);
  const routerPath = val[0];
  router.push(`/${routerPath}`);
})

</script>

<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}
</style>
