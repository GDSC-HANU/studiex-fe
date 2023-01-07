<template>
  <div class="w-full">
    <el-input
      v-model="value"
      class="!w-full"
      :disabled="isLoading"
    />
  </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { PropType } from 'vue';
import { SupplyItemCustom } from '~~/utils/model/supply/supplyItem';
const { isLoading, setLoading } = useLoading()
const emit = defineEmits(['supplyItemUpdate'])
const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemCustom>,
    required: true
  }
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