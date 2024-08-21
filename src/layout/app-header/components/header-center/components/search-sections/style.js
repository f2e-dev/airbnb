import styled from 'styled-components'

export const SectionsWrapper = styled.div`
  width: 850px;
  height: 66px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 32px;

  display: flex;

  .item {
    flex: 1;
    border-radius: 32px;

    display: flex;
    align-items: center;

    &:hover {
      background-color: #eee;
    }

    .info {
      flex: 1;
      padding: 0 30px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        color: #222;
        font-size: 12px;
        font-weight: 800;
      }

      .desc {
        color: #666;
        font-size: 14px;
      }
    }

    .divider {
      width: 1px;
      height: 32px;
      background-color: #ddd;
    }
  }
`
