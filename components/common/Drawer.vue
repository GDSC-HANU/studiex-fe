<template>
	<div :class="`relative bg-slate-800 text-slate-50 h-full transition-all`">
		<div class="bg-slate-900 h-14 flex items-center p-2 mb-2">
			<el-image class="block h-full" src="/imgs/Tailwind_logo.png" :fit="`fill`" />
			<h1 class="grow text-center text-xl">StudieX</h1>
		</div>
		<ul>
			<template v-for="(route, index) in sidebar">
				<NuxtLink :to="route.path" :class="`m-2 p-2 rounded-lg flex items-center cursor-pointer hover:bg-slate-900 transition
				${index === currentRoute ? 'bg-slate-900 text-slate-50' : 'text-slate-300'}`">
					<i v-html="route.icon"></i>
					<span class="ml-3">{{ route.name }}</span>
				</NuxtLink>
			</template>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { ElImage } from 'element-plus'
import { PropType } from 'vue';

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

<style>
.el-drawer__body {
	padding: 0 !important;
}
</style>