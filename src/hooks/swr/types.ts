import { IDdragonApiResponse } from '~interfaces/ddragonApiResponse'

export type ITransformedChampionsObject = {
  [championId: string]: IDdragonApiResponse['champions']['data']['IChampion']
}
