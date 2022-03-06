import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  top: 72px;
  right: 72px;

  border: 2px solid;
  border-color: ${p => p.theme.textColor};

  background: transparent;

  padding: 8px 10px;

  transition: all 0.3s ease;
`
