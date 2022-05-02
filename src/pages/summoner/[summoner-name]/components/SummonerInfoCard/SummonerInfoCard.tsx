import Skeleton from 'react-loading-skeleton'
import { ISummonerInfoCardProps } from './types'
import * as S from './styled'
import useGetProfileIcon from '~hooks/swr/useGetProfileIcon'
import capitalize from '~utils/capitalize'

const SummonerInfoCard = (props: ISummonerInfoCardProps) => {
  const profileIcon = useGetProfileIcon(props.summonerInfo.profileIconId)

  const { name, summonerLevel } = props.summonerInfo

  const renderRankedTiers = () => {
    return (
      <>
        <S.RankedTier key='solo-duo-tier'>
          {`Solo/Duo -
            ${capitalize(props.rankedInfo.soloRankedInfo?.tier) || 'Unranked'}
            ${props.rankedInfo.soloRankedInfo?.rank || ''}
          `}
        </S.RankedTier>
        <S.RankedTier key='flex-tier'>
          {`Flex -
            ${capitalize(props.rankedInfo.flexRankedInfo?.tier) || 'Unranked'}
            ${props.rankedInfo.flexRankedInfo?.rank || ''}
          `}
        </S.RankedTier>
      </>
    )
  }

  return (
    <>
      <S.Container>
        <S.IconWrapper>
          {profileIcon ? (
            <S.ProfileIcon
              src={profileIcon}
              layout='fixed'
              width={120}
              height={120}
            />
          ) : (
            <Skeleton width={120} height={120} borderRadius='50%' />
          )}
        </S.IconWrapper>
        <div>
          <S.NameAndLevel>
            {name} - Level {summonerLevel}
          </S.NameAndLevel>
          {renderRankedTiers()}
        </div>
      </S.Container>
    </>
  )
}

export default SummonerInfoCard
