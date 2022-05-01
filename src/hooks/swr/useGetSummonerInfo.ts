import axios, { AxiosError, AxiosResponse } from 'axios'
import useSWR from 'swr'
import { IRiotApiResponse } from '~interfaces/riotApiResponse'

const useGetSummonerInfo = (summonerName: string) => {
  const { data: axiosData, error: axiosError } = useSWR<
    AxiosResponse<IRiotApiResponse['summonerInfo']>,
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
