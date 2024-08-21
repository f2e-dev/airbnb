import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .global {
    width: 46px;
    height: 42px;
    border-radius: 22px;
    cursor: pointer;
    margin-right: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${(props) =>
        props.theme.isTransparency ? 'unset' : '#f7f7f7'};
    }
  }

  .profile {
    width: 86px;
    height: 48px;
    box-sizing: border-box;
    padding: 8px 8px 8px 14px;
    border: 1px solid #ddd;
    border-radius: 30px;
    ${(props) => props.theme.mixin.boxShadow}
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    .panel {
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #ddd;

      position: absolute;
      top: 54px;
      right: 0;

      .top,
      .bottom {
        padding: 10px 0;

        div {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f7f7f7;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
