import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.background};
`

export const Text = styled.h1`
  font-size: 36px;

  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 18px;

    margin-bottom: 0;
  }
`
