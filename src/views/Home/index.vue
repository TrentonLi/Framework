<template>
  <a-layout :style="{height: '100vh'}">
    <!--左-->
    <a-layout-sider
        collapsedWidth="64"
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
      <a-layout-header
          style="background: #fff; padding: 0"
      >
        <!--头部-->
        <Header
            v-model:collapsed="collapsed"
        />
      </a-layout-header>
      <!--标签导航-->
      <RouteTabs
          @changeKeys="changeKeys"
      />

      <a-layout-content
          :style="{
            margin: '20px 16px',
              minHeight: '280px',
              overflow: 'auto'
          }">
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
import RouteTabs from "@/components/RouteTabs.vue";

const ris = new ReasonIdStore(CURRENT_TAB)
const stored = ris.get();

const selectedKeys = ref<string[]>(stored ?? ['home']);
const collapsed = ref<boolean>(false);
const router = useRouter();

const changeKeys = (val: string[]) => {
  selectedKeys.value = val;
}

watch(selectedKeys, (val: string[]) => {
  const routerPath = val[0];
  ris.set(val)
  router.push(`/${routerPath}`);
})

</script>

<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}
</style>
