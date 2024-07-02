<script lang="ts">
export default {
  name: 'sideBar',
  inheritAttrs: false,
  customOptions: {}
};
</script>
<script setup lang="ts">
const isCollapse = ref(false);

const router = useRouter();

const result = router.getRoutes().find(item => item.path === '/');
</script>
<template>
  <div class="h-full w-[150px]">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :collapse="isCollapse" default-active="2" router>
        <el-menu-item v-for="item in result?.children" :key="item.path" :index="item.path">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.el-menu {
  // border: none;
  min-height: 100%;
  width: 100% !important;
}
.el-scrollbar {
  height: 100%;
  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}
</style>
