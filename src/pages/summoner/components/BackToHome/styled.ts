import styled from 'styled-components'

export const Container = styled.button`
  position: fixed;
  top: 72px;
  left: 72px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: none;

  transition: all 0.3s ease;

  color: ${p => p.theme.textColor};
`

export const Text = styled.h2`
  margin-left: 8px;
`
