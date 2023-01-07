<template>
  <div>
    <div>
      <el-input
        v-model="searchValue"
        class="w-50 m-2"
        placeholder="Search item"
        clearable
      >
        <template #prefix>
          <MagnifyingGlassIcon class="w-6 h-6" />
        </template>
      </el-input>
    </div>
    <div class="">
      <template
        v-for="remainSupplyItem in allowedSupplyItem"
        :key="remainSupplyItem.key"
      >
      <el-tag
        v-if="isInSearchValue(remainSupplyItem)" 
        class="m-1 cursor-pointer"
        @click="$emit('addSupplyItem', remainSupplyItem)"
      >
        <p class="text-sm">{{ remainSupplyItem.key }}</p>
      </el-tag>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ElTag, ElInput } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItem } from '~~/utils/model/allowedSupply/allowedSupplyItem';

const emit = defineEmits(['addSupplyItem'])
const props = defineProps({
  allowedSupplyItem: {
    type: Array as PropType<AllowedSupplyItem[]>,
    required: true
  },
})

const searchValue = ref('')
function isInSearchValue(allowedSupplyItem: AllowedSupplyItem) {
  return allowedSupplyItem.key.toLowerCase().includes(searchValue.value.toLowerCase())
}
</script>

<style scoped>
</style>