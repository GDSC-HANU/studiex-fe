<template>
  <div>
    <el-input
      v-model="value"
      placeholder="Search something ..."
    >
      <template #prefix>
        <MagnifyingGlassIcon class="w-4 h-4" />
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';

const value = ref('')
</script>

<style scoped>
</style>