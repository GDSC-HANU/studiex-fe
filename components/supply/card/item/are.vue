<template>
  <p>
    <template v-for="item in value">
      <span class="p-1 bg-slate-200 rounded text-slate-600 text-sm">
        {{ item }}
      </span>
      <span class="tracking-[-0.15em]">
        &nbsp;
      </span>
    </template>
  </p>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  value: {
    type: Array as PropType<string[]>,
    required: true
  }
})
</script>

<style scoped>
</style>