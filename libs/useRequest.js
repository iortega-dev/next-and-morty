import useSWR from 'swr'
import axios from 'axios'

/* Custom Hook which made use of "useSWR" hook and Axios request library */
export default function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then(response => response.data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData
      }
    }
  ) 
}
