import styled from 'styled-components'
import Icons from '~components/Icons/Icons'

export const Container = styled.button`
  border: 2px solid;
  border-color: ${p => p.theme.textColor};

  background: transparent;

  padding: 4px 6px;

  transition: all 0.3s ease;
`

export const StyledIcons = styled(Icons)``
