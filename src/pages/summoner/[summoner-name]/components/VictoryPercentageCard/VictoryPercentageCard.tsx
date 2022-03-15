import { useState } from 'react'
import CircleProgress from './components/CircleProgress'
import {
  CircleProgressWrapper,
  Container,
  PercentageNumber,
  Score,
  ScoreboardWrapper,
  SelectButton,
  SelectsWrapper,
  TextContent,
  Title,
} from './styled'
import { IVictoryPercentageProps } from './types'

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
      return 100
    }

    const totalMatches = currentRankedInfo.wins + currentRankedInfo.losses

    const winsPercentage = (currentRankedInfo.wins * 100) / totalMatches

    return Math.round(winsPercentage)
  }

  return (
    <Container>
      <TextContent>
        <Title>Victory percentage</Title>
        <SelectsWrapper>
          <SelectButton
            type='button'
            onClick={handleClick('solo/duo')}
            isActive={selectedRank === 'solo/duo'}
          >
            Solo/Duo
          </SelectButton>
          <SelectButton
            type='button'
            onClick={handleClick('flex')}
            isActive={selectedRank === 'flex'}
          >
            Flex
          </SelectButton>
        </SelectsWrapper>
        <ScoreboardWrapper>
          {currentRankedInfo ? (
            <>
              <Score>
                <span>Played</span>
                <span>{currentRankedInfo.wins + currentRankedInfo.losses}</span>
              </Score>
              <Score>
                <span>Wins</span>
                <span>{currentRankedInfo.wins}</span>
              </Score>
              <Score>
                <span>Losses</span>
                <span>{currentRankedInfo.losses}</span>
              </Score>
            </>
          ) : (
            <Score>This player is unranked</Score>
          )}
        </ScoreboardWrapper>
      </TextContent>
      <CircleProgressWrapper>
        <PercentageNumber>{getWinPercentage()}%</PercentageNumber>
        <CircleProgress
          percentage={getWinPercentage()}
          width={150}
          height={150}
        />
      </CircleProgressWrapper>
    </Container>
  )
}

export default VictoryPercentageCard
