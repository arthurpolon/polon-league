import axios, { AxiosError, AxiosResponse } from 'axios'
import useSWR from 'swr'
import { ISummonerInfo } from './types'

const useGetSummonerInfo = (summonerName: string) => {
  const { data: axiosData, error: axiosError } = useSWR<
    AxiosResponse<ISummonerInfo>,
    AxiosError
  >(`/api/summoner-by-name/${summonerName}`, axios.get)

  return {
    data: axiosData?.data,
    error: {
      code: axiosError?.response?.status,
      message: axiosError?.response?.statusText,
    },
  }
}

export default useGetSummonerInfo
