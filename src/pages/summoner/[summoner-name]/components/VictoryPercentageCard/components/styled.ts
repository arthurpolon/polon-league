import styled from 'styled-components'

export const CircleSVG = styled.svg`
  display: block;

  position: absolute;
  inset: 0;
`

export const Progress = styled.path<{ animationTime: number }>`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;

  d: path(
    'M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831'
  );

  &.animate {
    animation: progress ${p => p.animationTime}s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`
