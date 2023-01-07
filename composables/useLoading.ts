const isLoading = ref(false)
export default function() {

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  return { isLoading, setLoading }
}