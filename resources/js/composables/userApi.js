import axios from 'axios'

export function useApi() {
  const get = (url) => axios.get(url).then(r => r.data)
  const post = (url, data) => axios.post(url, data).then(r => r.data)
  const put = (url, data) => axios.put(url, data).then(r => r.data)
  const del = (url) => axios.delete(url)

  return { get, post, put, del }
}