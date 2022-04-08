import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: ${p => p.theme.background};
  border-radius: 5px;
  width: min(520px, 90vw);

  padding: 24px 48px 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

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

export const Input = styled.input<{ error: boolean }>`
  width: 100%;

  background-color: ${p => p.theme.background};

  border-radius: 8px;
  border: 1px solid ${p => (p.error ? p.theme.error : '#c4c5cc')};

  font-size: 14px;

  padding: 14px 10px;
  margin-top: 32px;
  margin-bottom: 8px;

  color: ${p => (p.error ? p.theme.error : 'unset')};

  &::placeholder {
    color: ${p => (p.error ? p.theme.error : '#9fa0a7')};
    font-size: 14px;
  }

  ${p => {
    if (p.error) {
      return css`
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      `
    }
  }}

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`

export const ErrorMessage = styled.div`
  font-weight: 700;
  overflow: hidden;
  max-height: 0;

  color: ${p => p.theme.error};

  font-size: 0.8rem;

  animation: grow 5s ease-in-out;

  @keyframes grow {
    0% {
      max-height: 0;
    }

    50% {
      max-height: 500px;
    }

    100% {
      max-height: 0;
    }
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
  margin-top: 20px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background: ${p => p.theme.gradient};

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`

export const Form = styled.form`
  width: 100%;
`
