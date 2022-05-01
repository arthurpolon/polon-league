import useSWR from 'swr'
import { IDdragonApiResponse } from '~interfaces/ddragonApiResponse'
import ddragonApi from '~services/api'
import { ITransformedChampionsObject } from './types'
import useGetGameVersions from './useGetGameVersions'

const parseObjectKeyToChampionKey = (
  championsObject: IDdragonApiResponse['champions']['data'],
) => {
  const transformedChampionsObject: ITransformedChampionsObject = {}

  Object.values(championsObject).forEach(champion => {
    transformedChampionsObject[champion.key] = champion
  })

  return transformedChampionsObject
}

const fetcher = (url: string) => ddragonApi.get(url).then(res => res.data)

const useGetAllChampions = (): ITransformedChampionsObject | undefined => {
  const { currentGameVersion } = useGetGameVersions()

  const { data: allChampionsResponse } = useSWR<
    IDdragonApiResponse['champions']
  >(
    currentGameVersion
      ? `/cdn/${currentGameVersion}/data/pt_BR/champion.json`
      : null,
    fetcher,
  )

  let championsObject: ITransformedChampionsObject | undefined

  if (allChampionsResponse) {
    championsObject = parseObjectKeyToChampionKey(allChampionsResponse.data)
  }

  return championsObject
}

export default useGetAllChampions
