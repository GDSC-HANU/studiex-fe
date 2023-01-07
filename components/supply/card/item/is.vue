<template>
  <p>
    {{ value }}
  </p>
</template>

<script lang="ts" setup>
defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>