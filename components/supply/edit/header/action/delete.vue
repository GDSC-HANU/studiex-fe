<template>
  <div>
    <div 
      class="flex items-center gap-3 h-12 px-3 transition hover:bg-slate-200 active:bg-slate-300 cursor-pointer"
      @click="showDialog = true"
    >
      <TrashIcon class="w-6 h-6" />
      <p>Delete supply</p>
    </div>
    <el-dialog
      v-model="showDialog"
      width="20rem"
      :title="`Are you sure to delete ${currentSupply.subjectName} supply?`"
    >
      <div class="flex justify-end">
        <el-button type="info" @click="showDialog = false" size="large">Cancel</el-button>
        <el-button type="danger" @click="handleDeleteSupply" size="large">Delete</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElButton, ElDialog } from 'element-plus';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()

const showDialog = ref(false)
function handleDeleteSupply() {
  showDialog.value = false
}
</script>

<style scoped>
</style>