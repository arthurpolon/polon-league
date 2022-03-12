import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useGetSummonerInfo from '~hooks/swr/useGetSummonerInfo'
import resToImage from '~utils/resToImage'
import SummonerInfoCard from './components/SummonerInfoCard/SummonerInfoCard'
import { MainContent, SideBar } from './styled'
import { ISummonerPageProps } from './types'

const SummonerPage = (props: ISummonerPageProps) => {
  return (
    <div>
      <SideBar />
      <MainContent>
        <SummonerInfoCard
          summonerInfo={props.summonerInfo}
          rankedInfo={props.rankedInfo}
        />
        <h1>SummonerPage</h1>
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
        </h2>
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default SummonerPage
