<template>
    <div
    @mouseenter="isShowDropdownIcon = true"
    @mouseleave="isShowDropdownIcon = false"
  >
    <li
      class="flex items-center gap-3 leading-8 cursor-pointer p-1 rounded hover:shadow transition"
      @click="$emit('toggleShowDescription')"
    >
      <p class="shrink-0 basis-28 md:basis-1/4 leading-6 font-bold"> {{ supplyItem.key }} </p>
      <p> {{ supplyItem.value }} </p>
      <transition name="el-fade-in-linear">
        <div v-show="isShowDropdownIcon || isShowDescription" class="ml-auto" >
          <ChevronDownIcon
            class="w-6 h-6 transition"
            :class="isShowDescription ? 'transform rotate-180' : ''"
          />
        </div>
      </transition>
    </li>
    <el-collapse-transition>
      <div v-show="isShowDescription">
        <supply-card-item-description :description="supplyItem.description" />
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { SupplyItemCustom } from '~~/utils/model/supply/supplyItem';
import { ElCollapseTransition } from 'element-plus'
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const isShowDropdownIcon = ref(false)

defineEmits(['toggleShowDescription'])
defineProps({
  supplyItem: {
    type: Object as PropType<SupplyItemCustom>,
    required: true
  },
  isShowDescription: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
</style>