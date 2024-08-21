import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  position: relative;

  .pictures {
    height: 600px;

    display: flex;

    &:hover {
      .left,
      .right {
        .item {
          .cover {
            opacity: 1 !important;
          }
        }
      }
    }

    .left,
    .right {
      width: 50%;
      height: 100%;

      .item {
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        position: relative;

        &:hover {
          img {
            transform: scale(1.1);
          }

          .cover {
            opacity: 0 !important;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 200ms ease;
        }

        .cover {
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 200ms ease;

          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }
    }
  }

  .show-all-pictures {
    line-height: 22px;
    padding: 6px 15px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;

    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 15;
  }
`
