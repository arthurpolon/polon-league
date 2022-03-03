import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

export interface SummonerInfo {
  accountId: string
  id: string
  name: string
  puuid: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}
export type Props = {
  summonerInfo: SummonerInfo
}

const SummonerPage = (props: Props) => {
  const { isFallback } = useRouter()

  const { summonerInfo } = props

  return isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <h1>
          {summonerInfo.name} - {summonerInfo.summonerLevel}
        </h1>
      </div>
    </div>
  )
}

export default SummonerPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const riotApi = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol',
    headers: { 'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY },
  })
  const summonerName = params['summoner-name']

  const { data: summonerInfo } = await riotApi.get(
    `/summoner/v4/summoners/by-name/${summonerName}`,
  )

  const { data: rankedInfo } = await riotApi.get(
    `/league/v4/entries/by-summoner/${summonerInfo.id}`,
  )

  const { data: championMastery } = await riotApi.get(
    `/champion-mastery/v4/champion-masteries/by-summoner/${summonerInfo.id}`,
  )

  const { data: gameVersions } = await axios.get(
    'https://ddragon.leagueoflegends.com/api/versions.json',
  )

  const { data: allChampions } = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/${gameVersions[0]}/data/en_US/champion.json`,
  )

  const { data: profileIcon } = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${summonerInfo.profileIconId}.png`,
  )

  return {
    props: {
      summonerName,
      summonerInfo,
      championMastery,
      rankedInfo,
      allChampions,
      profileIcon,
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          'summoner-name': 'bife a cavaio',
        },
      },
    ],
    fallback: true,
  }
}
