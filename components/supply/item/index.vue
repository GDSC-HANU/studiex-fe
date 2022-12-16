<template>
  <el-scrollbar max-height="50vh">
    <template v-for="supplyItem in supplyItems">
      <supply-item-is
        v-if="supplyItem.operator === Operator.IS"
        class="supply-item"
        :supply-item="(supplyItem as SupplyItemIS)"
        :allowed-supply-item="getAllowedSupplyItemONE_OF(supplyItem as SupplyItemIS)"
        @supply-item-updated="updateSupplyItem"
        @supply-item-deleted="deleteSupplyItem"
      />

      <supply-item-are
        v-if="supplyItem.operator === Operator.ARE"
        class="supply-item"
        :supply-item="(supplyItem as SupplyItemARE)"
        :allowed-supply-item="getAllowedSupplyItemMANY_OF(supplyItem as SupplyItemARE)"
        @supply-item-updated="updateSupplyItem"
        @supply-item-deleted="deleteSupplyItem"
      />

      <supply-item-between
        v-if="supplyItem.operator === Operator.BETWEEN"
        class="supply-item"
        :supply-item="(supplyItem as SupplyItemBETWEEN)"
        :allowed-supply-item="getAllowedSupplyItemBETWEEN(supplyItem as SupplyItemBETWEEN)"
        @supply-item-updated="updateSupplyItem"
        @supply-item-deleted="deleteSupplyItem"
      />
    </template>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElScrollbar } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItemBETWEEN, AllowedSupplyItemMANY_OF, AllowedSupplyItemONE_OF } from '~~/utils/model/allowed';
import { Operator, SupplyItemARE, SupplyItemBETWEEN, SupplyItemIS, SupplyItem } from '~~/utils/model/supply';

const emit = defineEmits(['supplyItemsUpdated'])

// Use Type assertion to check the value of SupplyItems & AllowedSupplyItems
const props = defineProps({
  supplyItems: {
    type: Array as PropType<Array<SupplyItem>>,
    required: true
  },
  allowedSupplyItems: {
    type: Array as PropType<Array<AllowedSupplyItemONE_OF | AllowedSupplyItemMANY_OF | AllowedSupplyItemBETWEEN>>,
      required: true
  }
})

function getAllowedSupplyItemONE_OF(supplyItemIs: SupplyItemIS) {
  return props.allowedSupplyItems.find(
    allowedSupplyItem => allowedSupplyItem.key === supplyItemIs.key
  ) as AllowedSupplyItemONE_OF
}

function getAllowedSupplyItemMANY_OF(supplyItemAre: SupplyItemARE) {
  return props.allowedSupplyItems.find(
    allowedSupplyItem => allowedSupplyItem.key === supplyItemAre.key
  ) as AllowedSupplyItemMANY_OF
}

function getAllowedSupplyItemBETWEEN(supplyItemBetween: SupplyItemBETWEEN) {
  return props.allowedSupplyItems.find(
    allowedSupplyItem => allowedSupplyItem.key === supplyItemBetween.key
  ) as AllowedSupplyItemBETWEEN
}

function updateSupplyItem(supplyItemUpdated: SupplyItemIS | SupplyItemARE | SupplyItemBETWEEN) {
  const supplyItemsToUpdate = [...props.supplyItems]
  supplyItemsToUpdate.forEach((supplyItem, index) => {
    if (supplyItem.key === supplyItemUpdated.key)
      supplyItemsToUpdate[index] = supplyItemUpdated
  })
  emit('supplyItemsUpdated', supplyItemsToUpdate)
}

function deleteSupplyItem(supplyItemKey: string) {
  const supplyItemsToDelete = props.supplyItems.filter(supply => supply.key !== supplyItemKey)
  emit('supplyItemsUpdated', supplyItemsToDelete)
}
</script>

<style scoped>
</style>