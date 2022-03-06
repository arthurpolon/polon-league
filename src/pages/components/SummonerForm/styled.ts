import styled from 'styled-components'
import NextImage from 'next/image'

export const Container = styled.div`
  background-color: ${p => p.theme.background};
  border-radius: 5px;
  width: min(520px, 90vw);

  padding: 24px 48px 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled(NextImage)``

export const IconDescription = styled.span`
  color: #9347b1;
  font-size: 18px;
  font-weight: 700;

  margin-top: 4px;
`

export const Title = styled.h1`
  font-size: 24px;
  line-height: 30px;

  margin-top: 32px;
`

export const SubTitle = styled.span`
  font-size: 14px;
  line-height: 20px;

  color: #9fa2b4;

  margin-top: 12px;
`

export const Input = styled.input`
  width: 100%;

  background-color: ${p => p.theme.background};

  border-radius: 8px;
  border: 1px solid #c4c5cc;

  font-size: 14px;

  padding: 14px 10px;
  margin-top: 32px;

  &::placeholder {
    color: #9fa0a7;
    font-size: 14px;
  }
`

export const Button = styled.button`
  color: white;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  padding: 12px 24px;
  border-radius: 8px;

  width: 100%;
  margin-top: 28px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background: linear-gradient(#fd749b, #281ac8);

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
`

export const Form = styled.form`
  width: 100%;
`
