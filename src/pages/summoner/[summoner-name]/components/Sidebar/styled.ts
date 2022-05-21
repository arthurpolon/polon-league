import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  width: 27%;
  max-width: 400px;

  border-right: ${p => p.theme.border};
  background: ${p => p.theme.background};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 24px;
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
`

export const SiteName = styled.h1`
  color: #9347b1;
  font-size: 18px;
  font-weight: 700;

  margin-left: 8px;
`

export const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 36px;
`

export const Element = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${p => p.isActive && '#fff'};

  width: 90%;

  padding: 24px 20px;

  border-radius: 0 999px 999px 0;

  background: ${p => (p.isActive ? p.theme.gradient : p.theme.background)};
  font-weight: 500;

  margin-bottom: 12px;

  cursor: pointer;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
  .icon {
    width: 26px;
    height: 26px;

    margin-right: 18px;
  }
`
