<template>
  <div>
    <div v-if="screenIs('md')">
      <el-select
        v-model="value"
        multiple
        placeholder="Select a supply item"
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
    <div v-if="!screenIs('md')">
      <el-select
        v-model="value"
        multiple
        collapse-tags
        collapse-tags-tooltip
        placeholder="Select a supply item"
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
  </div>
</template>

<script lang="ts" setup>
import { ElSelect, ElOption } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItemMANY_OF } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItemARE } from '~~/utils/model/supply/supplyItem';
const { screenIs } = useWindowWidth()
const emit = defineEmits(['supplyItemUpdate'])

const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemARE>,
    required: true
  },
  allowedSupplyItem: {
    type: Object as PropType<AllowedSupplyItemMANY_OF>,
    required: true,
  }
})

const value = computed({
  get() {
    return props.supplyItem.value
  },
  set(value: string[]) {
    const supplyItem = props.supplyItem.clone()
    supplyItem.value = value
    emit('supplyItemUpdate', supplyItem)
  }
})
</script>

<style scoped>
</style>