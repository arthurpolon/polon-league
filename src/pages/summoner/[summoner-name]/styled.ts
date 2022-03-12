import styled from 'styled-components'

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 290px;
  height: 100vh;

  border: 1px solid gray;
`

export const MainContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: calc(100vw - 290px);
  height: 100vh;

  border: 1px solid gray;
  background: radial-gradient(circle at center, #f1e1ef, #fff9fe);
`
