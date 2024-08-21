import styled from 'styled-components'

export const CenterWrapper = styled.div`
  height: 48px;

  display: flex;
  justify-content: center;

  position: relative;

  .search-bar {
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    ${(props) => props.theme.mixin.boxShadow};
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;

    .text {
      padding: 0 16px;
      color: ${(props) => props.theme.text.secondaryColor};
      font-weight: 600;
    }

    .icon {
      width: 32px;
      height: 32px;
      background-color: ${(props) => props.theme.color.primaryColor};
      border-radius: 50%;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .search-detail {
    transform-origin: 50% 0;
    will-change: transform, opacity;

    position: relative;

    .search-sections-container {
      transform: translateX(-50%);

      position: absolute;
      top: 60px;
      left: 50%;
    }
  }

  .detail-exit-active {
    transition: all 200ms ease;
    transform: scale(0.36, 0.72) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.36, 0.72) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .bar-enter {
    transform: scale(2.8, 1.4) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 200ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`
