import styled from 'styled-components'

export const Main = styled.div`
  background: ${p => p.theme.secondaryBackground};

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    'summonerInfo        mostPlayedChampion'
    'victoryPercentage   mostPlayedChampion';

  row-gap: 72px;
  column-gap: 24px;

  justify-items: center;
  align-items: center;

  margin: auto;
`
