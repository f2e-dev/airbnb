import styled from 'styled-components'

export const TabsWrapper = styled.div`
  color: ${(props) => (props.theme.isTransparency ? '#fff' : '#222')};

  display: flex;
  justify-content: center;

  .item {
    width: 64px;
    height: 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 16px;

    position: relative;

    &.active {
      .bottom {
        width: 64px;
        height: 2px;
        background-color: ${(props) =>
          props.theme.isTransparency ? '#fff' : '#333'};

        position: absolute;
        top: 28px;
        left: 0;
      }
    }
  }
`
