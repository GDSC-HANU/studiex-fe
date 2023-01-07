<template>
  <div class="flex justify-between">
    <nuxt-link to="/profile/supply" class="icon-button">
      <ArrowLongLeftIcon class="w-6 h-6" />
    </nuxt-link>
    <div>
      <h2 class="inline text-2xl font-bold"> {{ currentSupply.subjectName }} </h2>
      <span
        class="text-red-600 italic font-sm ml-2"
        v-show="!currentSupply.active"
      > (Don't active) </span>
    </div>
    <supply-edit-header-action />
  </div>
</template>

<script lang="ts" setup>
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline';
import { Supply } from '~~/utils/model/supply/supply';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()
</script>

<style scoped>
</style>