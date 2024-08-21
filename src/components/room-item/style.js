import styled from 'styled-components'

export const RoomWrapper = styled.div`
  width: ${(props) => props.$width};
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;

  flex-shrink: 0;

  .inner {
    width: 100%;

    .carousel {
      cursor: pointer;

      position: relative;

      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        color: #fff;

        display: none;
        justify-content: space-between;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;

        .btn {
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );

          display: flex;
          justify-content: center;
          align-items: center;

          &.next {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }

      .indicator {
        width: 30%;
        margin: 0 auto;

        position: absolute;
        right: 0;
        bottom: 10px;
        left: 0;
        z-index: 15;

        .item {
          width: 20%;

          display: flex;
          justify-content: center;
          align-items: center;

          .dot {
            width: 6px;
            height: 6px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;

            &.active {
              width: 8px;
              height: 8px;
              background-color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }

    .cover {
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .desc {
      color: ${(props) => props.$color};
      font-size: 12px;
      font-weight: 700;
      margin: 10px 0 5px;
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      display: -webkit-box;
    }

    .price {
      margin: 8px 0;
    }

    .rate {
      color: ${(props) => props.theme.text.primaryColor};
      font-size: 12px;
      font-weight: 600;
      margin: 8px 0;

      display: flex;
      align-items: center;

      .ant-rate-star {
        margin-right: 0;
      }

      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`
