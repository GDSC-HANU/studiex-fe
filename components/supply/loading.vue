<template>
  <el-skeleton animated style="--el-skeleton-circle-size: 100px">
    <template #template>
      <div class="md:p-3">
        <div class="p-3 md:p-5 bg-slate-50 shadow rounded-lg mb-8" v-for="i in 3">
          <div class="w-full">
            <el-skeleton-item variant="h1" class="!h-8 !w-1/4" />
            <br />
            <el-skeleton-item variant="text" class="!h-6 !w-20 mt-1" />
            <el-skeleton-item variant="text" class="!h-6 !w-20 ml-3" />
            <div class="border-t my-5 border-slate-300"></div>
            <div class="w-28 md:w-1/4 inline-block my-2"><el-skeleton-item variant="text" class="!h-6 !w-24" /></div>
            <el-skeleton-item variant="text" class="!h-6 !w-3/12 md:!w-5/12" /><br />
            <div class="w-28 md:w-1/4 inline-block my-2"><el-skeleton-item variant="text" class="!h-6 !w-20" /></div>
            <el-skeleton-item variant="text" class="!h-6 !w-1/12" /><br />
            <div class="w-28 md:w-1/4 inline-block my-2"><el-skeleton-item variant="text" class="!h-6 !w-12" /></div>
            <el-skeleton-item variant="text" class="!h-6 !w-2/12" /><br />
            <div class="w-28 md:w-1/4 inline-block my-2"><el-skeleton-item variant="text" class="!h-6 !w-16" /></div>
            <el-skeleton-item variant="text" class="!h-6 !w-3/12" /><br />
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