import { IRiotApiResponse } from '~interfaces/riotApiResponse'

export interface ISummonerInfoCardProps {
  summonerInfo: IRiotApiResponse['summonerInfo']
  rankedInfo: IRiotApiResponse['rankedInfo']
}
