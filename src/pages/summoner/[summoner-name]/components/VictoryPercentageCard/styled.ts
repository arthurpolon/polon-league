import styled from 'styled-components'
import CircleProgress from './components/CircleProgress'
import { ISelectButtonProps } from './types'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;

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

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;

  margin-bottom: 16px;

  background-image: ${p => p.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const SelectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 12px;
`

export const SelectButton = styled.button<ISelectButtonProps>`
  font-size: 12px;
  font-weight: 800;
  line-height: 14px;

  color: ${p => (p.theme.isDark ? '#f0f0f0' : '#fff')};

  background: ${p => (p.isActive ? p.theme.gradient : '#bebebe')};
`
export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.textColor};

  font-size: 18px;
  font-weight: 800;
  line-height: 27px;
`

export const ScoreboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 24px;

  margin-top: 24px;
`

export const CircleProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 150px;
  height: 150px;
`

export const PercentageNumber = styled.span`
  font-size: 32px;
  font-weight: 800;
  line-height: 50px;

  background-image: ${p => p.theme.secondaryGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
