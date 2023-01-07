<template>
  <div class="mt-3 md:flex gap-5">
    <supply-edit-add-item class="flex-1 mb-3 md:mb-0" />
    <supply-edit-add-custom class="flex-1" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Supply } from '~~/utils/model/supply/supply';
</script>

<style scoped>
</style>