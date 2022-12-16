<template>
  <div class="supply-view">
    <Supply :supplys="supplys" @supplys-updated="handleSupplysUpdated" />
  </div>
</template>

<script lang="ts" setup>
import Allowed, { AllowedOperator } from '~~/utils/model/allowed';
import SupplyModel, { Operator } from "~~/utils/model/supply"
import { useAllowStore } from '~~/store/allow';

const allowStore = useAllowStore()

const allowsFakeData: Allowed[] = [
  {
    subjectName: 'English',
    allowedSupplyItems: [
      {
        key: 'Familiar',
        operator: AllowedOperator.ONE_OF,
        value: ['Native Language', 'Fluent Language', 'Entry-level language']
      },
      {
        key: 'IELTS',
        operator: AllowedOperator.ONE_OF,
        value: ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5', '9.0', '9.5']
      },
      {
        key: 'Skills',
        operator: AllowedOperator.MANY_OF,
        value: ['Reading', 'Writing', 'Listening', 'Speaking']
      },
      {
        key: 'TOEFL',
        operator: AllowedOperator.BETWEEN,
        value: {
          minValue: 70,
          maxValue: 90,
          difference: 1
        }
      },
      {
        key: 'PTE',
        operator: AllowedOperator.BETWEEN,
        value: {
          minValue: 10,
          maxValue: 90,
          difference: 5
        }
      },
      {
        key: 'Cambridge English qualification',
        operator: AllowedOperator.ONE_OF,
        value: ['B2', 'C1', 'C2']
      }
    ]
  },
  {
    subjectName: 'Vietnamese',
    allowedSupplyItems: []
  },
  {
    subjectName: 'France',
    allowedSupplyItems: []
  },
  {
    subjectName: 'Japanese',
    allowedSupplyItems: []
  },
  {
    subjectName: 'Microsoft Office',
    allowedSupplyItems: []
  },
]

const supplysFakeData: SupplyModel[] = [
  {
    subjectName: 'English',
    active: true,
    supplyItems: [
      {
        key: 'Familiar',
        operator: Operator.IS,
        value: 'Fluent Language'
      },
      {
        key: 'IELTS',
        operator: Operator.IS,
        value: '6.0'
      },
      {
        key: 'Skills',
        operator: Operator.ARE,
        value: ['Reading', 'Writing', 'Listening']
      }
    ]
  },
  {
    subjectName: 'Vietnamese',
    active: true,
    supplyItems: []
  },
  {
    subjectName: 'France',
    active: true,
    supplyItems: []
  },
  {
    subjectName: 'Japanese',
    active: true,
    supplyItems: []
  },
  {
    subjectName: 'Microsoft Office',
    active: true,
    supplyItems: []
  },
  
]

const supplys = ref(supplysFakeData)

onMounted(() => {
  allowStore.initAllows(allowsFakeData)
})

function handleSupplysUpdated(newSupplys: SupplyModel[]) {
  supplys.value = newSupplys
}

watch(supplys, () => {
  console.log(supplys.value);
})

</script>

<style scoped>

</style>