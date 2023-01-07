<template>
  <div>
    <Markdown
      class="markdown"
      :source="content"
    />
  </div>
</template>

<script lang="ts" setup>
import Markdown from 'vue3-markdown-it';
import '~~/assets/style/markdown.css'

defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
</style>