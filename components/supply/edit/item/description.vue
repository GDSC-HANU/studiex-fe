<template>
  <div class="icon-button mx-auto" @click="handleOpenDialog">
    <Bars3Icon class="w-6 h-6" />
  </div>
  <el-dialog
    v-model="isShowDialog"
    title="Description"
    width="80%"
  >
    <el-input
      v-model="description"
      type="textarea"
      :rows="10"
    />
    <div class="flex justify-end mt-3">
      <el-button
        @click="descriptionUpdate"
        size="large"
      >
        OK
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { ElInput, ElDialog, ElButton } from 'element-plus';

const { isLoading, setLoading } = useLoading()

const emit = defineEmits(['descriptionUpdate'])
const props = defineProps({
  description: {
    type: String,
    required: true
  },
})
const description = ref(props.description)

const isShowDialog = ref(false)

function descriptionUpdate() {
  emit('descriptionUpdate', description.value)
  isShowDialog.value = false
}

function handleOpenDialog() {
  if (!isLoading.value)
    isShowDialog.value = true
}
</script>

<style scoped>
</style>