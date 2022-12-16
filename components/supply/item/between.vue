<template>
  <el-row class="supply-item">
    <el-col :span="6">
      <p>{{ allowedSupplyItem.key }}</p>
    </el-col>
    <el-col :span="15">
      <el-slider @change="(supplyItemSelected: number[]) => updateSupplyItem(supplyItemSelected)"
        :min="allowedSupplyItem.value.minValue" :max="allowedSupplyItem.value.maxValue"
        :step="allowedSupplyItem.value.difference" range show-stops v-model="value" :marks="marks" />
    </el-col>
    <el-col :span="3" class="flex justify-center items-center">
      <el-button text @click="$emit('supplyItemDeleted', supplyItem.key)">
        <TrashIcon class="w-5 h-5 text-slate-400 hover:text-slate-700" />
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ElCol, ElRow, ElSlider, ElButton } from 'element-plus'
import { PropType } from 'vue';
import { AllowedSupplyItemBETWEEN } from '~~/utils/model/allowed';
import { SupplyItemBETWEEN } from '~~/utils/model/supply';
import { TrashIcon } from '@heroicons/vue/24/solid'
const emit = defineEmits(['supplyItemUpdated', 'supplyItemDeleted'])

function updateSupplyItem(value: number[]) {
  const supplyItem = { ...props.supplyItem }
  supplyItem.value = {
    minValue: value[0],
    maxValue: value[1]
  }
  emit('supplyItemUpdated', supplyItem)
}

const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemBETWEEN>,
    required: true
  },
  allowedSupplyItem: {
    type: Object as PropType<AllowedSupplyItemBETWEEN>,
    required: true
  }
})

const value = ref([
  props.supplyItem.value.minValue,
  props.supplyItem.value.maxValue
])

const marks = computed(() => ({
  [props.supplyItem.value.minValue]: props.supplyItem.value.minValue.toString(),
  [props.supplyItem.value.maxValue]: props.supplyItem.value.maxValue.toString(),
}))
</script>

<style scoped>
.supply-item {
  @apply mb-6;
}
</style>