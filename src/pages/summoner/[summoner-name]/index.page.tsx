import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import useGetSummonerInfo from '~hooks/swr/useGetSummonerInfo'
import resToImage from '~utils/resToImage'

const SummonerPage = () => {
  const { query } = useRouter()
  const { 'summoner-name': summonerName } = query

  const { data: summonerInfo, error } = useGetSummonerInfo(
    summonerName as string,
  )

  return (
    <div>
      {summonerInfo && <h1>SummonerPage {summonerInfo.name}</h1>}
      {error && (
        <h1>
          {error.code}
          {error.message}
        </h1>
      )}
    </div>
  )
}

export default SummonerPage
