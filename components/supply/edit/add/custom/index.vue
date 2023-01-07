<template>
  <div>
    <div
      class="flex gap-3 justify-center p-5 shadow rounded-lg hover:bg-slate-100 active:bg-slate-300 cursor-pointer"
      @click="handleOpenDialog"
    >
      <p>Add Custom Item</p>
      <PlusIcon class="w-6 h-6" />
    </div>
    <el-dialog
      v-model="isShowDialog"
      title="Enter item name"
      width="80%"
    >
      <supply-edit-add-custom-dialog
        :supply="currentSupply"
        @add-custom-item="handleAddCustomItem"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElDialog } from 'element-plus';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { SupplyItemCustom } from '~~/utils/model/supply/supplyItem';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()

const emit = defineEmits(['supplyUpdate'])

function handleAddCustomItem(key: string) {
  currentSupply.customSupplyItems.push(new SupplyItemCustom(
    key,
    '',
    ''
  ))
  isShowDialog.value = false
}

const isShowDialog = ref(false)
function handleOpenDialog() {
  isShowDialog.value = true
}
</script>

<style scoped>

</style>