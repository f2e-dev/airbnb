import styled from 'styled-components'

export const LongforWrapper = styled.div`
  width: 20%;

  flex-shrink: 0;

  .inner {
    padding: 8px;

    .inner-content {
      border-radius: 3px;
      overflow: hidden;

      position: relative;

      .cover {
        width: 100%;
      }

      .bg-cover {
        height: 60%;
        background-image: linear-gradient(
          -180deg,
          rgba(0, 0, 0, 0) 3%,
          rgb(0, 0, 0) 100%
        );

        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      .info {
        padding: 0 24px 32px;
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 8px;
        bottom: 0;
        left: 8px;

        .city {
          font-size: 18px;
          font-weight: 600;
        }

        .price {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
`
