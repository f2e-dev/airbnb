import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    padding: 14px 16px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    ${(props) => props.theme.mixin.boxShadow};
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    cursor: pointer;
    margin-right: 16px;

    flex-basis: 120px;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`
