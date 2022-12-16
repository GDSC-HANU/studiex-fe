<template>
  <div class="add-item">
    <template v-for="remainSupplyItem in remainSupplyItems">
      <el-tooltip class="mx-1" effect="light" shadow="never">
        <template #content>
          <div class="max-w-xs">
            <p class="text-sm">{{ remainSupplyItem.key }}</p>
            <el-divider />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint distinctio aperiam mollitia
              tempora
              sunt sit inventore nihil quaerat, harum vel ullam, ipsam perferendis ex non quas reiciendis dolorem
              ducimus.
            </p>
          </div>
        </template>
        <el-tag class="mx-1 cursor-pointer" @click="() => addSupplyItem(remainSupplyItem)">
          <p class="text-sm">{{ remainSupplyItem.key }}</p>
        </el-tag>
      </el-tooltip>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ElTag, ElTooltip, ElDivider } from 'element-plus'
import { PropType } from 'vue';
import { AllowedOperator, AllowedSupplyItem, AllowedSupplyItemBETWEEN, AllowedSupplyItemMANY_OF, AllowedSupplyItemONE_OF } from '~~/utils/model/allowed';
import { Operator } from '~~/utils/model/supply';

const emit = defineEmits(['addEvent'])

function addSupplyItem(supplyItemToAdd: AllowedSupplyItem) {
  if (supplyItemToAdd.operator === AllowedOperator.ONE_OF) {
    supplyItemToAdd as AllowedSupplyItemONE_OF
    emit('addEvent', {
      key: supplyItemToAdd.key,
      operator: Operator.IS,
      value: supplyItemToAdd.value[0]
    })
  } else if (supplyItemToAdd.operator === AllowedOperator.MANY_OF) {
    supplyItemToAdd as AllowedSupplyItemMANY_OF
    emit('addEvent', {
      key: supplyItemToAdd.key,
      operator: Operator.ARE,
      value: []
    })
  } else if (supplyItemToAdd.operator === AllowedOperator.BETWEEN) {
    supplyItemToAdd as AllowedSupplyItemBETWEEN
    emit('addEvent', {
      key: supplyItemToAdd.key,
      operator: Operator.BETWEEN,
      value: {
        minValue: supplyItemToAdd.value.minValue,
        maxValue: supplyItemToAdd.value.maxValue
      }
    })
  }
}

const props = defineProps({
  remainSupplyItems: {
    type: Array as PropType<Array<AllowedSupplyItem>>,
    required: true
  },
})


</script>

<style scoped>
.el-tag {}
</style>