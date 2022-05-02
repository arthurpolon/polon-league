import { useState } from 'react'
import Image from 'next/image'
import CircleProgress from './components/CircleProgress'
import * as S from './styled'
import { IVictoryPercentageProps } from './types'

import OkEmote from './images/okay-emote.webp'

const VictoryPercentageCard = (props: IVictoryPercentageProps) => {
  const [selectedRank, setSelectedRank] = useState<'solo/duo' | 'flex'>(
    'solo/duo',
  )

  const currentRankedInfo =
    selectedRank === 'solo/duo'
      ? props.rankedInfo?.soloRankedInfo
      : props.rankedInfo?.flexRankedInfo

  const handleClick = (rank: 'solo/duo' | 'flex') => () => setSelectedRank(rank)

  const getWinPercentage = () => {
    if (!currentRankedInfo) {
      return 0
    }

    const totalMatches = currentRankedInfo.wins + currentRankedInfo.losses

    const winsPercentage = (currentRankedInfo.wins * 100) / totalMatches

    return Math.round(winsPercentage * 10) / 10 // limit to 1 decimal place
  }

  const winPercentage = getWinPercentage()

  return (
    <S.Container>
      <S.TextContent>
        <S.Title>Victory percentage</S.Title>
        <S.SelectsWrapper>
          <S.SelectButton
            type='button'
            onClick={handleClick('solo/duo')}
            isActive={selectedRank === 'solo/duo'}
          >
            Solo/Duo
          </S.SelectButton>
          <S.SelectButton
            type='button'
            onClick={handleClick('flex')}
            isActive={selectedRank === 'flex'}
          >
            Flex
          </S.SelectButton>
        </S.SelectsWrapper>
        <S.ScoreboardWrapper>
          {currentRankedInfo ? (
            <>
              <S.Score>
                <span>Played</span>
                <span>{currentRankedInfo.wins + currentRankedInfo.losses}</span>
              </S.Score>
              <S.Score>
                <span>Wins</span>
                <span>{currentRankedInfo.wins}</span>
              </S.Score>
              <S.Score>
                <span>Losses</span>
                <span>{currentRankedInfo.losses}</span>
              </S.Score>
            </>
          ) : (
            <S.Score>This player is unranked</S.Score>
          )}
        </S.ScoreboardWrapper>
      </S.TextContent>
      <S.CircleProgressWrapper>
        {winPercentage ? (
          <S.PercentageNumber>{winPercentage}%</S.PercentageNumber>
        ) : (
          <Image src={OkEmote} layout='fixed' width={90} height={90} />
        )}
        <CircleProgress
          percentage={winPercentage || 100}
          width={150}
          height={150}
        />
      </S.CircleProgressWrapper>
    </S.Container>
  )
}

export default VictoryPercentageCard
