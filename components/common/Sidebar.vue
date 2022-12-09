<template>
	<div :class="`relative bg-slate-800 text-slate-50 h-full transition-all ${isCollapsed ? 'w-14' : 'w-60'}`">
		<div class="bg-slate-900 h-14 flex items-center p-2 mb-2">
			<el-image class="block h-full" src="../../assets/imgs/Tailwind_logo.png" :fit="`fill`" />
			<h1 class="grow text-center text-xl" v-show="!isCollapsed">StudyEX</h1>
		</div>
		<ul>
			<template v-for="(route, index) in sidebar">
				<ClientOnly>
					<el-tooltip :content="route.name" placement="right" :disabled="!isCollapsed" :show-after="200" :hide-after="100">
						<NuxtLink :to="route.path" :class="`m-2 p-2 rounded-lg flex items-center cursor-pointer hover:bg-slate-900 transition
						${index === currentRoute ? 'bg-slate-900 text-slate-50' : 'text-slate-300'}`">
							<i v-html="route.icon"></i>
							<span class="ml-3" v-show="!isCollapsed">{{ route.name }}</span>
						</NuxtLink>
					</el-tooltip>
				</ClientOnly>
			</template>
		</ul>
		<i :class="`absolute bottom-1 transform translate-x-1/2 text-slate-50 cursor-pointer p-2 rounded-full border border-slate-600
		bg-slate-900 hover:bg-slate-800 active:bg-slate-700 ${isCollapsed ? 'rotate-180 right-1/2' : 'rotate-0 right-0'}`"
			@click="isCollapsed = !isCollapsed">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</i>
	</div>
</template>

<script lang="ts" setup>
import { ElImage, ElTooltip, ElButton } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue';
import { PropType } from 'vue';

const isCollapsed = ref(false)
const route = useRoute()

const props = defineProps({
	sidebar: {
		type: Array as PropType<Array<{
			name: string,
			icon: string,
			path: string
		}>>,
		required: true
	}
})

const currentRoute = computed(() => props.sidebar.findIndex(sidebarItem => {
	if (sidebarItem.path === '/')
		if (route.path === '/')
			return true
		else
			return false
	else
		return route.path.startsWith(sidebarItem.path)
}))

</script>

<style scoped>

</style>