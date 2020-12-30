import axios from 'axios'

const getPerformanceRow = (datas: Record<string, any>) => {
  return axios.post('https://console.xhj.com/web/xiaoqu', datas).then(res => {
    if (res.status === 200) { return res.data.data }
  })
}

export { getPerformanceRow }
