<template>
  <el-tabs class="supplys max-w-4xl m-auto" type="border-card">
    <ClientOnly>
      <el-tab-pane v-for="(supply, index) in supplys" :label="supply.subjectName">
        <supply-tab :supply="supply" :allowSupply="allows[index]" @supply-updated="supplysUpdated" />
      </el-tab-pane>
    </ClientOnly>
    <el-tab-pane label="+"></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import { PropType } from 'vue';
import { useAllowStore } from '~~/store/allow';
import Supply from "../../utils/model/supply"

const allowStore = useAllowStore()
const allows = computed(() => allowStore.$state.allows)

const emit = defineEmits(['supplysUpdated'])

function supplysUpdated(newSupply: Supply) {
  emit('supplysUpdated', props.supplys.map(supply => supply.subjectName === newSupply.subjectName ? newSupply : supply))
}

const props = defineProps({
  supplys: {
    type: Array as PropType<Supply[]>,
    required: true
  }
})
</script>

<style scoped>

</style>