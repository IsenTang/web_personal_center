<script lang="ts">
export default {
  name: 'tabContainer',
  inheritAttrs: false,
  customOptions: {}
};
</script>
<script setup lang="ts">
import { useTagsStore } from '@/stores/tab';

storeToRefs(useTagsStore());
</script>
<template>
  <div class="w-full h-4 mb-2">1</div>
</template>

<style scoped></style>
