<template>
  <tr class="table-row">
    <td class="align-middle pr-3 md:py-3">
      <p class="w-max font-bold max-w-[14rem] pl-1"> {{ supplyItem.key }}
        <span
          class="text-red-600"
          v-if="required"
        >*</span>
      </p>
    </td>

    <td class="table-cell align-middle w-full" v-if="!screenIs('md')">
      <slot></slot>
    </td>

    <td class="align-middle pl-5">
      <supply-edit-item-description
        :description="supplyItem.description"
        @description-update="handleDescriptionUpdate"
      />
    </td>

    <td class="align-middle">
      <div
        class="icon-button mx-auto"
        v-if="!required"
        @click="handleDescriptionDelete"
      >
        <XMarkIcon class="w-6 h-6" />
      </div>
      <el-tooltip
        content="You can't delete this item"
        placement="left"
        effect="light"
        v-else
      >
        <div class="text-slate-300 cursor-not-allowed p-2 w-fit mx-auto">
          <XMarkIcon class="w-6 h-6" />
        </div>
      </el-tooltip>
    </td>
  </tr>
  <tr v-if="screenIs('md')">
    <td class="pb-4" colspan="4">
      <slot></slot>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ElTooltip } from 'element-plus';
import { PropType } from 'vue';
import { AllowedSupplyItem } from '~~/utils/model/allowedSupply/allowedSupplyItem';
import { SupplyItem, SupplyItemCustom } from '~~/utils/model/supply/supplyItem';

const { screenIs } = useWindowWidth()

const emit = defineEmits(['supplyItemDelete', 'supplyItemUpdate'])
const props = defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItem | SupplyItemCustom>,
    required: true,
  },
  allowedSupplyItem: {
    type: [Object, null] as PropType<AllowedSupplyItem | null>,
    required: true,
  },
})

const required = computed(() => {
  return props.supplyItem instanceof SupplyItemCustom ? false : props.allowedSupplyItem.required
})

function handleDescriptionUpdate(description: string) {
  const supplyItem = props.supplyItem.clone()
  supplyItem.description = description
  emit('supplyItemUpdate', supplyItem)
}

function handleDescriptionDelete() {
  emit('supplyItemDelete', props.supplyItem.key)
}
</script>

<style scoped>
</style>