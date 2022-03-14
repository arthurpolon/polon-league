import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  grid-area: mostPlayedChampion;
  justify-self: start;

  padding: 32px;

  border-radius: 10px;
  background-color: ${p => p.theme.background};

  width: 375px;
  height: 550px;

  outline: ${p => p.theme.border};
  box-shadow: ${p => p.theme.boxShadow};
`
