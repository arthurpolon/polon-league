import NextImage from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from '~contexts/themeContext'
import useGetAllChampions from '~hooks/swr/useGetAllChampions'
import useGetChampionLoadingImage from '~hooks/swr/useGetChampionLoadingImage'
import * as S from './styled'
import { IMostPlayedChampionCard } from './types'

const MostPlayedChampionCard = (props: IMostPlayedChampionCard) => {
  const allChampionsObject = useGetAllChampions()
  const { isDark } = useTheme()

  const mostPlayedChampionMastery =
    props.championsMastery.length > 0 ? props.championsMastery[0] : undefined

  const mostPlayedChampionObject =
    allChampionsObject && mostPlayedChampionMastery
      ? allChampionsObject[mostPlayedChampionMastery.championId]
      : undefined

  const championLoadingImage = useGetChampionLoadingImage(
    mostPlayedChampionObject?.name,
  )

  return (
    <S.Container>
      <S.Title>Most played champion </S.Title>
      {championLoadingImage ? (
        <S.ImageWrapper>
          <NextImage src={championLoadingImage} layout='fill' />
        </S.ImageWrapper>
      ) : (
        <Skeleton
          width={380 * 0.546}
          height={380}
          enableAnimation={!allChampionsObject}
          baseColor={isDark ? '#2f2f2f' : undefined}
        />
      )}
      <S.ChampionName>
        {mostPlayedChampionObject ? (
          <>
            {mostPlayedChampionObject.name} -{' '}
            {mostPlayedChampionMastery?.championPoints.toLocaleString()} pts
          </>
        ) : (
          'This players has no games'
        )}
      </S.ChampionName>
    </S.Container>
  )
}

export default MostPlayedChampionCard
