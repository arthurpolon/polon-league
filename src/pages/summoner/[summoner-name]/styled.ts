import styled from 'styled-components'

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 290px;
  height: 100vh;

  border-right: ${p => p.theme.border};
  background: ${p => p.theme.background};
`

export const MainContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: calc(100vw - 290px);
  height: 100vh;

  display: grid;
  grid-template-areas:
    'summonerInfo        mostPlayedChampion'
    'victoryPercentage   mostPlayedChampion';

  row-gap: 60px;
  column-gap: 60px;
  justify-items: center;
  align-items: center;

  background: ${p => p.theme.secondaryBackground};
`
