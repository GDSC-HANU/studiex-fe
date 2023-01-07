<template>
  <table class="w-full">
    <supply-edit-item
      v-for="supplyItem in currentSupply.supplyItems"
      :key="supplyItem.key"
      :supply-item="supplyItem"
      :allowed-supply-item="currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key)"
      @supply-item-delete="handleSupplyItemDelete"
      @supply-item-update="handleSupplyItemUpdate"
    >
      <supply-edit-item-is
        class="w-full"
        :supply-item="supplyItem"
        :allowed-supply-item="currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key)"
        @supply-item-update="handleSupplyItemUpdate"
        v-if="(currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key) instanceof AllowedSupplyItemONE_OF)"
      />
      <supply-edit-item-are
        class="w-full"
        :supply-item="supplyItem"
        :allowed-supply-item="currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key)"
        @supply-item-update="handleSupplyItemUpdate"
        v-if="(currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key) instanceof AllowedSupplyItemMANY_OF)"
      />
      <supply-edit-item-between
        :supply-item="supplyItem"
        class="my-2"
        :allowed-supply-item="currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key)"
        @supply-item-update="handleSupplyItemUpdate"
        v-if="(currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key) instanceof AllowedSupplyItemBETWEEN)"
      />
    </supply-edit-item>
    
    <supply-edit-item
      v-for="supplyItem in currentSupply.customSupplyItems"
      :key="supplyItem.key"
      :supply-item="supplyItem"
      :allowed-supply-item="currentAllowedSupply.getAllowedSupplyItemByKey(supplyItem.key)"
      @supply-item-delete="handleSupplyItemDelete"
    >
      <div class="w-full">
        <supply-edit-item-custom
          :supply-item="supplyItem"
          @supply-item-update="handleSupplyItemCustomUpdate"
        />
      </div>
    </supply-edit-item>
  </table>
</template>

<script lang="ts" setup>
import { useAllowedSupplyStore } from '~~/store/allowedSupply';
import { AllowedSupplyItemMANY_OF, AllowedSupplyItemONE_OF, AllowedSupplyItemBETWEEN } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItemCustom, SupplyItem } from '~~/utils/model/supply/supplyItem';
import { useSupplyStore } from '~~/store/supply';

const { currentAllowedSupply } = useAllowedSupplyStore()
const { currentSupply } = useSupplyStore()

function handleSupplyItemUpdate(supplyItem: SupplyItem) {
  currentSupply.getSupplyItemByKey(supplyItem.key).value = supplyItem.value
  currentSupply.getSupplyItemByKey(supplyItem.key).description = supplyItem.description
}

function handleSupplyItemCustomUpdate(supplyItem: SupplyItemCustom) {
  currentSupply.getSupplyItemCustomByKey(supplyItem.key).value = supplyItem.value
  currentSupply.getSupplyItemCustomByKey(supplyItem.key).description = supplyItem.description
}

function handleSupplyItemDelete(key: string) {
  currentSupply.supplyItems = currentSupply.supplyItems.filter(
    supplyItem => supplyItem.key !== key
  )
  currentSupply.customSupplyItems = currentSupply.customSupplyItems.filter(
    supplyItem => supplyItem.key !== key
  )
}
</script>

<style scoped>
</style>