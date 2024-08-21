import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #ebebeb;
  margin-top: 100px;

  .container {
    width: 1080px;
    box-sizing: border-box;
    padding: 48px 24px;
    margin: 0 auto;
  }

  .service {
    display: flex;

    .item {
      flex: 1;

      .name {
        font-weight: 700;
        margin-bottom: 16px;
      }

      .list {
        .iten {
          color: #767676;
          cursor: pointer;
          margin-top: 6px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .statement {
    padding: 20px;
    border-top: 1px solid #ebebeb;
    text-align: center;
    color: #767676;
    margin-top: 30px;
  }
`
