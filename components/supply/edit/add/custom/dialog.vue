<template>
  <div>
    <el-input
      placeholder="Enter item name"
      v-model="value"
      type="text"
      maxlength="50"
      show-word-limit
      @keydown.enter="handleAddCustomItem"
    />
    <p
      class="text-red-600 mt-3"
      v-show="isExist"
    >This name is already exist</p>
    <div class="mt-3 flex justify-end">
      <el-button
        @click="handleAddCustomItem"
        size="large"
        :disabled="isExist || value === ''" 
      >
        Add
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElInput, ElButton } from 'element-plus';
import { PropType } from 'vue';
import { useAllowedSupplyStore } from '~~/store/allowedSupply';
import { Supply } from '~~/utils/model/supply/supply';

const allowedSupplyStore = useAllowedSupplyStore()

const emit = defineEmits(['addCustomItem'])
const props = defineProps({
  supply: {
    type: Object as PropType<Supply>,
    required: true
  },
})

const value = ref('')

const isExist = computed(() => {
  return !!allowedSupplyStore.allowedSupplys.getAllowSupplysBySubjectName(props.supply.subjectName).allowedSupplyItems.find(supplyItem => supplyItem.key.toLocaleLowerCase() === value.value.toLocaleLowerCase()) ||
    !!props.supply.customSupplyItems.find(supplyItem => supplyItem.key.toLocaleLowerCase() === value.value.toLocaleLowerCase())
})

function handleAddCustomItem() {
  if (isExist.value) return
  if (value.value === '') return
  emit('addCustomItem', value.value)
  value.value = ''
}
</script>

<style scoped>
</style>