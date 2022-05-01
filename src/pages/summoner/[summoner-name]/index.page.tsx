import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import ThemeButton from '~pages/components/ThemeButton/ThemeButton'
import { IRiotApiResponse } from '~interfaces/riotApiResponse'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import MostPlayedChampionCard from './components/MostPlayedChampionCard/MostPlayedChampionCard'
import SummonerInfoCard from './components/SummonerInfoCard/SummonerInfoCard'
import VictoryPercentageCard from './components/VictoryPercentageCard/VictoryPercentageCard'
import { Content, MainContainer, SideBar } from './styled'
import { IParams, ISummonerPageProps } from './types'

const SummonerPage = (props: ISummonerPageProps) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <LoadingScreen />
  }

  return (
    <div>
      <SideBar>
        <ThemeButton />
      </SideBar>
      <MainContainer>
        <Content>
          <SummonerInfoCard
            summonerInfo={props.summonerInfo}
            rankedInfo={props.rankedInfo}
          />
          <VictoryPercentageCard rankedInfo={props.rankedInfo} />
          <MostPlayedChampionCard championsMastery={props.championsMastery} />
        </Content>
      </MainContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<
  ISummonerPageProps,
  IParams
> = async ({ params }) => {
  const summonerName = params?.['summoner-name']
  const encodedSummonerName = encodeURIComponent(summonerName as string)

  const api = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol',
    headers: {
      'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY || '',
    },
  })

  try {
    const { data: summonerInfo } = await api.get(
      `/summoner/v4/summoners/by-name/${encodedSummonerName}`,
    )
    const { data: rankedInfoData } = await api.get(
      `/league/v4/entries/by-summoner/${summonerInfo.id}`,
    )
    const { data: championsMastery } = await api.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summonerInfo.id}`,
    )

    const soloRankedInfo = rankedInfoData.filter(
      (info: any) => info?.queueType === 'RANKED_SOLO_5x5',
    )[0]
    const flexRankedInfo = rankedInfoData.filter(
      (info: any) => info?.queueType === 'RANKED_FLEX_SR',
    )[0]

    const rankedInfo: IRiotApiResponse['rankedInfo'] = {}

    if (soloRankedInfo) rankedInfo.soloRankedInfo = soloRankedInfo
    if (flexRankedInfo) rankedInfo.flexRankedInfo = flexRankedInfo

    return {
      props: {
        rankedInfo,
        summonerInfo,
        championsMastery,
      },
      revalidate: 60 * 60 * 0.5 /* 30 minutes */,
    }
  } catch (err) {
    console.log(err)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default SummonerPage
