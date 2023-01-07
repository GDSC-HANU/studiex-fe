<template>
  <div class="py-1">
    <common-markdown
      v-if="description.length !== 0"
      :content="description"
      class="md:m-5 overflow-auto max-h-96"
    />
    <p
      class="text-center italic text-sm text-slate-600"
      v-else
    >~ Nothing to show here ~</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
</style>