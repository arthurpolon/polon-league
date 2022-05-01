import { ParsedUrlQuery } from 'querystring'
import { IRiotApiResponse } from '~interfaces/riotApiResponse'

export interface ISummonerPageProps {
  summonerInfo: IRiotApiResponse['summonerInfo']
  rankedInfo: IRiotApiResponse['rankedInfo']
  championsMastery: IRiotApiResponse['championsMastery']
}
export interface IParams extends ParsedUrlQuery {
  'summoner-name': string
}
