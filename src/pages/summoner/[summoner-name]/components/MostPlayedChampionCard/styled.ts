import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  grid-area: mostPlayedChampion;
  justify-self: start;

  padding: 32px;

  border-radius: 10px;
  background-color: ${p => p.theme.background};

  outline: ${p => p.theme.border};
  box-shadow: ${p => p.theme.boxShadow};
`

export const Title = styled.h2`
  margin-bottom: 24px;

  font-weight: 800;

  background-image: ${p => p.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ImageWrapper = styled.div`
  --image-height: 380px;

  position: relative;

  width: calc(var(--image-height) * 0.546);
  height: var(--image-height);

  border-radius: 8px;

  overflow: hidden;
  box-shadow: inset 0px 0px 27px 1px #ffffff;
`

export const ChampionName = styled.h3`
  margin-top: 18px;

  font-size: 22px;

  color: ${p => p.theme.textColor};
`
