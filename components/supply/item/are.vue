<template>
  <el-row class="supply-item">
    <el-col :span="6">
      <p>{{ allowedSupplyItem.key }}</p>
    </el-col>
    <el-col :span="15">
      <el-select @change="(supplyItemSelected: string[]) => updateSupplyItem(supplyItemSelected)" v-model="value"
        multiple>
        <el-option v-for="value in allowedSupplyItem.value" :label="value" :value="value" />
      </el-select>
    </el-col>
    <el-col :span="3" class="flex justify-center items-center">
      <el-button text @click="$emit('supplyItemDeleted', supplyItem.key)">
        <TrashIcon class="w-5 h-5 text-slate-400 hover:text-slate-700" />
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ElCol, ElOption, ElSelect, ElRow, ElButton } from 'element-plus'
import { PropType } from 'vue';
import { AllowedSupplyItemMANY_OF } from '~~/utils/model/allowed';
import { SupplyItemARE } from '~~/utils/model/supply';
import { TrashIcon } from '@heroicons/vue/24/solid'
const emit = defineEmits(['supplyItemUpdated', 'supplyItemDeleted'])

function updateSupplyItem(value: string[]) {
  const supplyItem = { ...props.supplyItem }
  supplyItem.value = value
  emit('supplyItemUpdated', supplyItem)
}

const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemARE>,
    required: true
  },
  allowedSupplyItem: {
    type: Object as PropType<AllowedSupplyItemMANY_OF>,
    required: true
  }
})

const value = ref(props.supplyItem.value)
</script>

<style scoped>
.el-select {
  @apply w-full;
}

.supply-item {
  @apply mb-3;
}
</style>