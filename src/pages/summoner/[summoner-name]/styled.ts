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

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw - 290px);
  height: 100vh;

  background: ${p => p.theme.secondaryBackground};
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    'summonerInfo        mostPlayedChampion'
    'victoryPercentage   mostPlayedChampion';

  row-gap: 60px;
  column-gap: 60px;

  justify-items: center;
  align-items: center;
`
