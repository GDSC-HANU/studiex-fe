<template>
  <el-dropdown
    trigger="click"
    placement="bottom-end"
  >
    <div class="icon-button">
      <EllipsisHorizontalIcon class="w-6 h-6" />
    </div>
    <template #dropdown>
      <div class="py-3">
        <supply-edit-header-action-active />
        <supply-edit-header-action-priority />
        <supply-edit-header-action-delete />
      </div>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';
import { ElDropdown } from 'element-plus';
import { Supply } from '~~/utils/model/supply/supply';
</script>

<style scoped>
</style>