import styled from 'styled-components'

export const FilterWrapper = styled.div`
  height: 48px;
  padding-left: 80px;
  background-color: #ffff;
  border-bottom: 1px solid #f2f2f2;

  display: flex;
  align-items: center;

  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  z-index: 16;

  .filter {
    display: flex;

    .item {
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: ${(props) => props.theme.text.primaryColor};
      cursor: pointer;
      margin-right: 8px;

      &.active {
        background-color: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`
