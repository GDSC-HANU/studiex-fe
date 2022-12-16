<template>
  <div class="option flex">
    <el-dropdown trigger="click" class="">
      <el-button circle class="aspect-square" text bg>
        <Cog6ToothIcon class="h-5 w-5" />
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <supply-option-active :active="supply.active" @disable-switched="$emit('')" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button class="ml-auto">
      SAVE
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElDropdown, ElButton, ElDropdownItem, ElDropdownMenu } from 'element-plus'

import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
import { PropType } from 'vue';
import Supply from '~~/utils/model/supply';

const props = defineProps({
  supply: {
    type: Object as PropType<Supply>,
    required: true
  },
})

</script>

<style scoped>
.el-button {
  /* @apply h-fit; */
}
</style>