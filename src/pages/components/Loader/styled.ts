import styled from 'styled-components'

export const Container = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  width: 200px;
  height: 200px;
  background-color: transparent;
  border: none;
  user-select: none;
  -webkit-user-select: none;

  .box-wrap {
    width: 70%;
    height: 70%;
    margin: calc((100% - 70%) / 2) calc((100% - 70%) / 2);
    position: relative;
    transform: rotate(-45deg);
  }
  .box-wrap .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(135, 0, 0, 0.6);
    background: linear-gradient(to right, #fd749b, #281ac8);
    background-position: 0% 50%;
    background-size: 200% 200%;
    visibility: hidden;
  }
  .box-wrap .box.one {
    -webkit-animation: moveGradient 15s infinite, oneMove 3.5s infinite;
    animation: moveGradient 15s infinite, oneMove 3.5s infinite;
  }
  .box-wrap .box.two {
    -webkit-animation: moveGradient 15s infinite, twoMove 3.5s 0.15s infinite;
    animation: moveGradient 15s infinite, twoMove 3.5s 0.15s infinite;
  }
  .box-wrap .box.three {
    -webkit-animation: moveGradient 15s infinite, threeMove 3.5s 0.3s infinite;
    animation: moveGradient 15s infinite, threeMove 3.5s 0.3s infinite;
  }
  .box-wrap .box.four {
    -webkit-animation: moveGradient 15s infinite, fourMove 3.5s 0.575s infinite;
    animation: moveGradient 15s infinite, fourMove 3.5s 0.575s infinite;
  }
  .box-wrap .box.five {
    -webkit-animation: moveGradient 15s infinite, fiveMove 3.5s 0.725s infinite;
    animation: moveGradient 15s infinite, fiveMove 3.5s 0.725s infinite;
  }
  .box-wrap .box.six {
    -webkit-animation: moveGradient 15s infinite, sixMove 3.5s 0.875s infinite;
    animation: moveGradient 15s infinite, sixMove 3.5s 0.875s infinite;
  }

  @-webkit-keyframes moveGradient {
    to {
      background-position: 100% 50%;
    }
  }

  @keyframes moveGradient {
    to {
      background-position: 100% 50%;
    }
  }
  @-webkit-keyframes oneMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes oneMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @-webkit-keyframes twoMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes twoMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @-webkit-keyframes threeMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes threeMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(0% 70% 70% 0 round 5%);
      clip-path: inset(0% 70% 70% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(0% 35% 70% round 5%);
      clip-path: inset(0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(35% 70% 35% 0 round 5%);
      clip-path: inset(35% 70% 35% 0 round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @-webkit-keyframes fourMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes fourMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @-webkit-keyframes fiveMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes fiveMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @-webkit-keyframes sixMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  @keyframes sixMove {
    0% {
      visibility: visible;
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    14.2857% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    28.5714% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    42.8571% {
      -webkit-clip-path: inset(70% 0 0 70% round 5%);
      clip-path: inset(70% 0 0 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    57.1428% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    71.4285% {
      -webkit-clip-path: inset(35% 0% 35% 70% round 5%);
      clip-path: inset(35% 0% 35% 70% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    85.7142% {
      -webkit-clip-path: inset(35% round 5%);
      clip-path: inset(35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    100% {
      -webkit-clip-path: inset(70% 35% 0% 35% round 5%);
      clip-path: inset(70% 35% 0% 35% round 5%);
      -webkit-animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`
