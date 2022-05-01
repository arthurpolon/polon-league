import useSWR from 'swr'
import { IDdragonApiResponse } from '~interfaces/ddragonApiResponse'
import ddragonApi from '~services/api'

const fetcher = (url: string) => ddragonApi.get(url).then(res => res.data)

const useGetGameVersions = () => {
  const { data: allGameVersions } = useSWR<
    IDdragonApiResponse['allGameVersions']
  >('/api/versions.json', fetcher)

  const currentGameVersion = allGameVersions && allGameVersions[0]

  return { allGameVersions, currentGameVersion }
}

export default useGetGameVersions
