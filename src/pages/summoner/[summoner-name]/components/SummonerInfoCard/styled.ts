import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 32px;

  border-radius: 10px;
  background-color: white;

  max-width: 525px;
`
export const RankedTier = styled.div`
  font-size: 16px;
  font-weight: bold;

  text-transform: capitalize;

  & + & {
    margin-top: 8px;
  }
`

export const NameAndLevel = styled.h2`
  font-size: 22px;
  font-weight: 800;

  margin-bottom: 16px;

  background-image: ${p => p.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ProfileIcon = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 100%;
  background-color: #c4c4c4;
  margin-right: 28px;
`

export const SkeletonProfileIcon = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 100%;
  background-color: #c4c4c4;
  margin-right: 28px;
`
