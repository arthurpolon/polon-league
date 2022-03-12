import useSWR from 'swr'
import ddragonApi from '~services/api'
import { ISummonerInfoCardProps } from './types'
import resToImage from '~utils/resToImage'
import {
  Container,
  NameAndLevel,
  ProfileIcon,
  RankedTier,
  SkeletonProfileIcon,
} from './styled'

const fetcher = url =>
  ddragonApi.get(url, { responseType: 'arraybuffer' }).then(res => res.data)

const SummonerInfoCard = (props: ISummonerInfoCardProps) => {
  const { data } = useSWR(
    `/cdn/12.4.1/img/profileicon/${props.summonerInfo.profileIconId}.png`,
    fetcher,
  )
  const { name, summonerLevel } = props.summonerInfo

  const renderRankedTiers = () => {
    const soloRankInfo = props.rankedInfo.filter(
      info => info.queueType === 'RANKED_SOLO_5x5',
    )[0]
    const flexRankInfo = props.rankedInfo.filter(
      info => info.queueType === 'RANKED_FLEX_SR',
    )[0]

    return (
      <>
        <RankedTier>
          {`Solo/Duo -
            ${soloRankInfo?.tier.toLowerCase() || 'Unranked'}
            ${soloRankInfo?.rank || ''}
          `}
        </RankedTier>
        <RankedTier>
          {`Flex -
            ${flexRankInfo?.tier.toLowerCase() || 'Unranked'}
            ${flexRankInfo?.rank || ''}
          `}
        </RankedTier>
      </>
    )
  }

  return (
    <>
      <Container>
        {data ? (
          <ProfileIcon src={resToImage(data)} alt='Profile icon' />
        ) : (
          <SkeletonProfileIcon />
        )}

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
