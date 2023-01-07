<template>
  <ul>
    <supply-card-item
      v-for="(supplyItem, index) in supplyItems"
      :key="supplyItem.key"
      class="my-1"
      :supply-item="supplyItem"
      :is-show-description="currentItemShowDescription === index"
      @toggle-show-description="switchItemShowDescription(index)"
    />
    <supply-card-item-custom
      v-for="(supplyItem, index) in customSupplyItems"
      :key="supplyItem.key"
      class="my-1"
      :supply-item="supplyItem"
      :is-show-description="currentItemShowDescription === supplyItems.length + index"
      @toggle-show-description="switchItemShowDescription(supplyItems.length + index)"
    />
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { SupplyItem, SupplyItemCustom } from '~~/utils/model/supply/supplyItem'

const currentItemShowDescription = ref(-1)

function switchItemShowDescription(itemToShow: number) {
  if (currentItemShowDescription.value === itemToShow) {
    currentItemShowDescription.value = -1
  } else {
    currentItemShowDescription.value = itemToShow
  }
}

defineProps({
  supplyItems: {
    type: Array as PropType<SupplyItem[]>,
    required: true
  },
  customSupplyItems: {
    type: Array as PropType<SupplyItemCustom[]>,
    required: true,
  },
})
</script>

<style scoped>
</style>