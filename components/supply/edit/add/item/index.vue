<template>
  <div>
    <div
      class="flex gap-3 justify-center p-5 shadow rounded-lg"
      :class="canAddItem ?
        'hover:bg-slate-100 active:bg-slate-300 cursor-pointer' :
        'bg-slate-100 cursor-not-allowed text-slate-300'"
      @click="handleOpenDialog"
    >
      <p>Add Item</p>
      <PlusIcon class="w-6 h-6" />
    </div>
    <el-dialog
      v-model="isShowDialog"
      title="Add some item"
      width="80%"
    >
      <supply-edit-add-item-dialog
        :allowedSupplyItem="remainingSupply"
        @addSupplyItem="handleAddSupplyItem"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElDialog } from 'element-plus';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { useAllowedSupplyStore } from '~~/store/allowedSupply';
import { AllowedSupplyItem, AllowedSupplyItemBETWEEN, AllowedSupplyItemMANY_OF, AllowedSupplyItemONE_OF } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItemARE, SupplyItemBETWEEN, SupplyItemIS } from '~~/utils/model/supply/supplyItem';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()
const { currentAllowedSupply } = useAllowedSupplyStore()

const remainingSupply = computed(() => {
  return currentAllowedSupply.allowedSupplyItems.filter(allowedSupplyItem => {
    return !currentSupply.supplyItems.some(supplyItem => supplyItem.key === allowedSupplyItem.key)
  })
})
const canAddItem = computed(() => remainingSupply.value.length > 0)

function handleAddSupplyItem(allowedSupplyItem: AllowedSupplyItem) {
  if (allowedSupplyItem instanceof AllowedSupplyItemONE_OF) {
    currentSupply.supplyItems.push(new SupplyItemIS(
      allowedSupplyItem.key,
      allowedSupplyItem.value[0],
      ''
    ))
  } else if (allowedSupplyItem instanceof AllowedSupplyItemMANY_OF) {
    currentSupply.supplyItems.push(new SupplyItemARE(
      allowedSupplyItem.key,
      allowedSupplyItem.value,
      ''
    ))
  } else if (allowedSupplyItem instanceof AllowedSupplyItemBETWEEN) {
    currentSupply.supplyItems.push(new SupplyItemBETWEEN(
      allowedSupplyItem.key,
      {
        minValue: allowedSupplyItem.value.minValue,
        maxValue: allowedSupplyItem.value.maxValue
      },
      ''
    ))
  }

  if (remainingSupply.value.length === 0)
    isShowDialog.value = false
}

const isShowDialog = ref(false)
function handleOpenDialog() {
  if (canAddItem.value)
    isShowDialog.value = true
}
</script>

<style scoped>

</style>