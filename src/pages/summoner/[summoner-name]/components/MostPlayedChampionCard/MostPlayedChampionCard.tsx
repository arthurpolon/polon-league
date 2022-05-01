import useGetAllChampions from '~hooks/swr/useGetAllChampions'
import { Container } from './styled'
import { IMostPlayedChampionCard } from './types'

const MostPlayedChampionCard = (props: IMostPlayedChampionCard) => {
  const allChampionsObject = useGetAllChampions()

  if (allChampionsObject) {
    const mostPlayedChampion =
      allChampionsObject[props.championsMastery[0].championId]

    console.log(mostPlayedChampion)
  }
  return (
    <Container>
      <h1>Most played champion </h1>
    </Container>
  )
}

export default MostPlayedChampionCard
