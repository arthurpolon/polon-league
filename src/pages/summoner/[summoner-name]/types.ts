export interface IChampionMastery {
  championId: number
  championLevel: number
  championPoints: number
  championPointsSinceLastLevel: number
  championPointsUntilNextLevel: number
  chestGranted: boolean
  lastPlayTime: number
  summonerId: string
  tokensEarned: number
}

export interface IRankedCommonFields {
  veteran: boolean
  inactive: boolean
  hotStreak: boolean
  freshBlood: boolean

  wins: number
  losses: number
  leaguePoints: number

  rank: string
  tier: string
  leagueId: string
  summonerId: string
  summonerName: string
}

export interface IRankedSoloInfo extends IRankedCommonFields {
  queueType: 'RANKED_SOLO_5x5'
}

export interface IRankedFlexInfo extends IRankedCommonFields {
  queueType: 'RANKED_FLEX_SR'
}

export type IRankedInfo = {
  soloRankedInfo?: IRankedSoloInfo
  flexRankedInfo?: IRankedFlexInfo
}

export interface ISummonerInfo {
  accountId: string
  id: string
  name: string
  profileIconId: number
  puuid: string
  revisionDate: number
  summonerLevel: number
}

export interface ISummonerPageProps {
  summonerInfo: ISummonerInfo
  rankedInfo: IRankedInfo
  championsMastery: IChampionMastery[]
}
