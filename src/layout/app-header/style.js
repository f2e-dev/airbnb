import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 17;
  }

  .content {
    padding: 0 80px;
    background-color: ${(props) =>
      props.theme.isTransparency
        ? 'rgba(255, 255, 255, 0)'
        : 'rgba(255, 255, 255, 1)'};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) =>
      props.theme.isTransparency
        ? 'rgba(233, 233, 233, 0)'
        : 'rgba(233, 233, 233, 1)'};
    transition: all 200ms ease;

    position: relative;
    z-index: 17;

    .top {
      height: 80px;

      display: flex;
      align-items: center;
    }
  }

  .cover {
    background-color: rgba(0, 0, 0, 0.2);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${(props) => (props.$isSearch ? '100px' : '0')};
  transition: height 250ms ease;
`
