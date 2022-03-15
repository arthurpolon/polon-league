import useSWR from 'swr'
import ddragonApi from '~services/api'
import { IUseGetGameVersionsResponse } from './types'

const fetcher = (url: string) => ddragonApi.get(url).then(res => res.data)

const useGetGameVersions = (): IUseGetGameVersionsResponse => {
  const { data: allGameVersions } = useSWR('/api/versions.json', fetcher)

  const currentGameVersion = allGameVersions && allGameVersions[0]

  return { allGameVersions, currentGameVersion }
}

export default useGetGameVersions
