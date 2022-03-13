import NextImage from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 32px;

  border-radius: 10px;
  background-color: ${p => p.theme.background};

  max-width: 525px;

  outline: ${p => p.theme.border};
  box-shadow: ${p => p.theme.boxShadow};
`

export const RankedTier = styled.div`
  font-size: 16px;
  font-weight: bold;

  & + & {
    margin-top: 8px;
  }
`

export const NameAndLevel = styled.h2`
  font-size: 22px;
  font-weight: 800;

  margin-bottom: 16px;

  background-image: ${p => p.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const IconWrapper = styled.div`
  width: 120px;
  height: 120px;

  margin-right: 28px;
`

export const ProfileIcon = styled(NextImage)`
  border-radius: 50%;
`
