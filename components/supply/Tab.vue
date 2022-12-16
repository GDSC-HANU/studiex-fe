<template>
  <div class="supply">
    <!-- <h1 class="text-lg text-center">{{ supply.subjectName }}</h1> -->
    <!-- <el-divider></el-divider> -->
    <supply-item
      :supply-items="supply.supplyItems"
      :allowed-supply-items="allowSupply.allowedSupplyItems"
      @supply-items-updated="updateSupply"
    />
    <el-divider content-position="center" v-show="remainSupplyItem.length !== 0">
      Add An Item
    </el-divider>
    <supply-add :remain-supply-items="remainSupplyItem" @add-event="addSupplyItem" />
    <el-divider></el-divider>
    <supply-option :supply="supply" />
  </div>
</template>

<script lang="ts" setup>
import { ElDivider } from 'element-plus'
import { PropType } from 'vue';
import Allowed from '~~/utils/model/allowed';
import Supply, { SupplyItem as SupplyItemModel } from '../../utils/model/supply';

const emit = defineEmits(['supplyUpdated'])

function addSupplyItem(supplyItemAdded: SupplyItemModel) {
  const supply = { ...props.supply }
  supply.supplyItems.push(supplyItemAdded)
  emit('supplyUpdated', supply)
}

function updateSupply(supplyItems: SupplyItemModel[]) {
  const supplyToUpdate = { ...props.supply }
  supplyToUpdate.supplyItems = supplyItems
  emit('supplyUpdated', supplyToUpdate)
}

const supplyItemKey = computed(() => props.supply.supplyItems.map(item => item.key))

const remainSupplyItem = computed(() => {
  return props.allowSupply.allowedSupplyItems.filter(allowedSupplyItem => {
    return !(supplyItemKey.value.includes(allowedSupplyItem.key))
  })
})

const props = defineProps({
  supply: {
    type: Object as PropType<Supply>,
    required: true
  },
  allowSupply: {
    type: Object as PropType<Allowed>,
    required: true
  }
})
</script>

<style scoped>
</style>