<template>
  <div class="active flex gap-3 items-center">
    <p>{{ active ? 'Disable Supply' : 'Enable Supply' }}</p>
    <el-switch v-model="active" />
  </div>
</template>

<script lang="ts" setup>
import { ElSwitch } from 'element-plus'
const emit = defineEmits(['disableSwitched'])

const props = defineProps({
  active: {
    type: Boolean,
    required: true
  }
})
console.log(props.active);

const active = ref(props.active)

watch(active, () => {
  emit('disableSwitched', !active)
})
</script>

<style scoped>
</style>