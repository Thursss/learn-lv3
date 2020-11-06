import { ref } from 'vue'
import axios from 'axios'

function useUrlLoading (url: string) {
  const res = ref(null)
  const loading = ref(true)
  const error = ref(null)

  axios.get(url).then((resData) => {
    res.value = resData.data
    loading.value = false
  }).catch((e) => {
    error.value = e
    loading.value = false
  })

  return { res, loading, error }
}

export default useUrlLoading
