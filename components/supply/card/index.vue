<template>
  <div
    class="p-3 md:p-5 md:rounded-lg relative shadow"
    :class="`${supply.active ? 'bg-slate-50' : 'bg-gray-300'}`"
  >
    <supply-card-edit
      class="absolute top-2 right-2 md:top-3 md:right-3"
      :subject-name="supply.subjectName"
    />
    <supply-card-header :supply="supply" />
    <div
      class="border-t my-5"
      :class="supply.active ? 'border-slate-300' : 'border-slate-400'"
    ></div>
    <supply-card-item-list
      :supply-items="supply.supplyItems"
      :custom-supply-items="supply.customSupplyItems"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Supply } from '~~/utils/model/supply/supply';

defineProps({
  supply: {
    type: Object as PropType<Supply>,
    required: true
  }
})
</script>

<style scoped>
</style>