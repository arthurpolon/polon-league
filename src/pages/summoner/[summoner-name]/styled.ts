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

  background: ${p => p.theme.secondaryBackground};
`
