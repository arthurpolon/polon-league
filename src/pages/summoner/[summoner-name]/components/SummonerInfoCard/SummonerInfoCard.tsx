import Skeleton from 'react-loading-skeleton'
import { ISummonerInfoCardProps } from './types'
import {
  Container,
  NameAndLevel,
  ProfileIcon,
  RankedTier,
  IconWrapper,
} from './styled'
import useGetProfileIcon from '~hooks/swr/useGetProfileIcon'
import capitalize from '~utils/capitalize'

const SummonerInfoCard = (props: ISummonerInfoCardProps) => {
  const profileIcon = useGetProfileIcon(props.summonerInfo.profileIconId)

  const { name, summonerLevel } = props.summonerInfo

  const renderRankedTiers = () => {
    return (
      <>
        <RankedTier key='solo-duo-tier'>
          {`Solo/Duo -
            ${capitalize(props.rankedInfo.soloRankedInfo?.tier) || 'Unranked'}
            ${props.rankedInfo.soloRankedInfo?.rank || ''}
          `}
        </RankedTier>
        <RankedTier key='flex-tier'>
          {`Flex -
            ${capitalize(props.rankedInfo.flexRankedInfo?.tier) || 'Unranked'}
            ${props.rankedInfo.flexRankedInfo?.rank || ''}
          `}
        </RankedTier>
      </>
    )
  }

  return (
    <>
      <Container>
        <IconWrapper>
          {profileIcon ? (
            <ProfileIcon
              src={profileIcon}
              layout='fixed'
              width={120}
              height={120}
            />
          ) : (
            <Skeleton width={120} height={120} borderRadius='50%' />
          )}
        </IconWrapper>
        <div>
          <NameAndLevel>
            {name} - Level {summonerLevel}
          </NameAndLevel>
          {renderRankedTiers()}
        </div>
      </Container>
    </>
  )
}

export default SummonerInfoCard
