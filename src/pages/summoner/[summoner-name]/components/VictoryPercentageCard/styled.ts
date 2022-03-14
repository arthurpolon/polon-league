import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  grid-area: victoryPercentage;
  align-self: start;
  justify-self: end;

  padding: 32px;

  border-radius: 10px;
  background-color: ${p => p.theme.background};

  width: min(37vw, 525px);
  min-height: 220px;

  outline: ${p => p.theme.border};
  box-shadow: ${p => p.theme.boxShadow};
`
