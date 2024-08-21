import styled from 'styled-components'

export const BrowserWrapper = styled.div`
  background-color: #333;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  .top {
    height: 86px;

    position: relative;
    z-index: 15;

    .close {
      cursor: pointer;

      position: absolute;
      top: 15px;
      right: 25px;
    }
  }

  .carousel {
    flex: 1;

    display: flex;
    justify-content: center;

    .control {
      color: #fff;

      display: flex;
      justify-content: space-between;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .btn {
        width: 83px;
        height: 100%;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .container {
      width: 100%;
      max-width: 105vh;
      height: 100%;
      overflow: hidden;

      position: relative;

      img {
        height: 100%;
        margin: 0 auto;
        user-select: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      .picture-enter {
        transform: translateX(${(props) => (props.$isNext ? '100%' : '-100%')});
        opacity: 0;
      }

      .picture-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .picture-exit {
        opacity: 1;
      }

      .picture-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    height: 100px;
    margin-top: 10px;

    display: flex;
    justify-content: center;

    .info {
      max-width: 105vh;
      color: #fff;

      position: absolute;
      bottom: 10px;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;

          display: flex;
          align-items: center;
        }
      }

      .list {
        height: ${(props) => (props.$isRenderList ? '67px' : '0')};
        overflow: hidden;
        transition: height 200ms ease;
        margin-top: 3px;

        .item {
          margin-right: 15px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          &.active {
            img {
              opacity: 1;
            }
          }

          img {
            height: 67px;
            opacity: 0.5;
          }
        }
      }
    }
  }
`
