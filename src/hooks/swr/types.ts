export interface ISummonerInfo {
  accountId: string
  id: string
  name: string
  puuid: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}

export interface IUseGetGameVersionsResponse {
  allGameVersions?: Array<string>
  currentGameVersion?: string
}
