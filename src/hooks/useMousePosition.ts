import { ref, toRefs, reactive, onMounted, onUnmounted } from 'vue'

function useMousePosition () {
  const position = reactive({
    x: ref(0),
    y: ref(0)
  })

  const positionRef = toRefs(position)

  function setVal (e: MouseEvent) {
    positionRef.x.value = e.pageX
    positionRef.y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', setVal)
  })

  onUnmounted(() => {
    document.removeEventListener('click', setVal)
  })

  return positionRef
}

export default useMousePosition
