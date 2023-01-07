<template>
  <div>
    <el-select
      v-model="value"
      :disabled="isLoading"
      class="w-full"
    >
      <el-option
        v-for="_value in allowedSupplyItem.value"
        :key="_value"
        :label="_value"
        :value="_value"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ElSelect, ElOption } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItemONE_OF } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItemIS } from '~~/utils/model/supply/supplyItem';
const { isLoading, setLoading } = useLoading()
const emit = defineEmits(['supplyItemUpdate'])

const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemIS>,
    required: true
  },
  allowedSupplyItem: {
    type: Object as PropType<AllowedSupplyItemONE_OF>,
    required: true,
  },
})

const value = computed({
  get() {
    return props.supplyItem.value
  },
  set(value: string) {
    const supplyItem = props.supplyItem.clone()
    supplyItem.value = value
    emit('supplyItemUpdate', supplyItem)
  }
})

</script>

<style scoped>
</style>