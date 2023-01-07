<template>
  <el-skeleton animated>
    <template #template>
      <div class="mt-5 md:p-3">
        <div class="p-3 md:p-5 bg-slate-50 shadow rounded-lg mb-8">
          <div class="w-full">
            <el-skeleton-item variant="h1" class="!h-9 !w-full" />
            <div class="border-t my-5 border-slate-300"></div>
            <el-skeleton-item variant="text" class="!w-full !h-6 my-3" /><br />
            <el-skeleton-item variant="text" class="!w-full !h-6 my-3" /><br />
            <el-skeleton-item variant="text" class="!w-full !h-6 my-3" /><br />
            <el-skeleton-item variant="text" class="!w-full !h-6 my-3" /><br />
            <div class="border-t my-5 border-slate-300"></div>
            <div class="flex gap-3">
              <el-skeleton-item variant="text" class="basis-1/2 !h-16" /><br />
              <el-skeleton-item variant="text" class="basis-1/2 !h-16" /><br />
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ElSkeleton, ElSkeletonItem } from 'element-plus';
</script>

<style scoped>

</style>