import axios from 'axios'

const axiosClient = axios.create()

export const apiClient = {
  get: <ResponseData>(url: string): Promise<ResponseData> =>
    axiosClient.get(url).then((res) => res.data),
  post: <ResponseData, Body>(url: string, body: Body): Promise<ResponseData> =>
    axiosClient.post(url, body).then((res) => res.data),
  delete: <ResponseData>(url: string): Promise<ResponseData> =>
    axiosClient.delete(url).then((res) => res.data),
}
