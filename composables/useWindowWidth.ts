import { computed, onMounted, onUnmounted, ref } from "vue"

export default function() {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 640) return 'sm'
    if (windowWidth.value >= 640 && windowWidth.value < 768) return 'md'
    if (windowWidth.value >= 768 && windowWidth.value < 1024) return 'lg'
    if (windowWidth.value >= 1024 && windowWidth.value < 1280) return 'xl'
    if (windowWidth.value >= 1280 && windowWidth.value < 1536) return '2xl'
    if (windowWidth.value >= 1536) return ''
    return null; // This is an unreachable line, simply to keep eslint happy.
  })

  const width = computed(() => windowWidth.value)

  function screenIs(type: string) {
    return windowWidth.value < 640 && type === 'sm'
      || windowWidth.value >= 640 && windowWidth.value < 768 && type === 'md'
      || windowWidth.value >= 768 && windowWidth.value < 1024 && type === 'lg'
      || windowWidth.value >= 1024 && windowWidth.value < 1280 && type === 'xl'
      || windowWidth.value >= 1280 && windowWidth.value < 1536 && type === '2xl'
      || windowWidth.value >= 1536 && type === ''
  }

  return { width, type, screenIs }
}