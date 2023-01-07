<template>
  <div class="w-full">
    <el-slider
      :v-model="value"
      :min="allowedSupplyItem.value.minValue"
      :max="allowedSupplyItem.value.maxValue"
      :step="allowedSupplyItem.value.difference"
      :marks="marks"
      range
      v-model="value"
      :disabled="isLoading"
    />
  </div>
</template>

<script lang="ts" setup>
import { ElSlider } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItemBETWEEN } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItemBETWEEN } from '~~/utils/model/supply/supplyItem';

const { isLoading, setLoading } = useLoading()

const emit = defineEmits(['supplyItemUpdate'])

const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemBETWEEN>,
    required: true
  },
  allowedSupplyItem: {
    type: Object as PropType<AllowedSupplyItemBETWEEN>,
    required: true,
  }
})

const value = computed({
  get() {
    return [props.supplyItem.value.minValue, props.supplyItem.value.maxValue]
  },
  set(value) {
    const supplyItem = props.supplyItem.clone()
    supplyItem.value = {
      minValue: value[0],
      maxValue: value[1]
    }
    emit('supplyItemUpdate', supplyItem)
  }
})

const marks = computed(() => ({
  [props.supplyItem.value.minValue]: props.supplyItem.value.minValue.toString(),
  [props.supplyItem.value.maxValue]: props.supplyItem.value.maxValue.toString(),
}))
</script>

<style scoped>
</style>