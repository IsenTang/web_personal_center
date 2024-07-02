<script lang="ts">
export default {
  name: 'layoutView',
  inheritAttrs: false,
  customOptions: {}
};
</script>
<script setup lang="ts">
import sideBar from '@/layout/components/sideBar/index.vue';
import tabContainer from '@/layout/components/tabContainer/index.vue';

defineProps<{}>();
</script>
<template>
  <div class="h-full w-full flex">
    <side-bar></side-bar>
    <div class="flex-1 p-2">
      <tab-container></tab-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
      </router-view>
    </div>
  </div>
</template>

<style scoped></style>
