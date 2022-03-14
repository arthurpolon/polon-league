import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import ThemeButton from '~pages/components/ThemeButton/ThemeButton'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import MostPlayedChampionCard from './components/MostPlayedChampionCard/MostPlayedChampionCard'
import SummonerInfoCard from './components/SummonerInfoCard/SummonerInfoCard'
import VictoryPercentageCard from './components/VictoryPercentageCard/VictoryPercentageCard'
import { MainContent, SideBar } from './styled'
import { ISummonerPageProps } from './types'

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
      <MainContent>
        <SummonerInfoCard
          summonerInfo={props.summonerInfo}
          rankedInfo={props.rankedInfo}
        />
        <VictoryPercentageCard />
        <MostPlayedChampionCard />
        {/* <h1>SummonerPage</h1>
        <br />
        <h2>
          {props.rankedInfo.map(info => (
            <div>
              {info.queueType} - {info.tier} {info.rank}
            </div>
          ))}
        </h2>
        <br />
        <h2>
          Most played champion
          {props.championsMastery[0].championId}
        </h2> */}
      </MainContent>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { 'summoner-name': summonerName } = params

  const api = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol',
    headers: {
      'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY,
    },
  })

  try {
    const { data: summonerInfo } = await api.get(
      `/summoner/v4/summoners/by-name/${summonerName}`,
    )
    const { data: rankedInfo } = await api.get(
      `/league/v4/entries/by-summoner/${summonerInfo.id}`,
    )
    const { data: championsMastery } = await api.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summonerInfo.id}`,
    )

    return {
      props: {
        summonerInfo,
        rankedInfo,
        championsMastery,
      },
      revalidate: 60 * 60 * 0.5 /* 30 minutes */,
    }
  } catch (err) {
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
