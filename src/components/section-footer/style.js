import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 10px;

  display: flex;

  .info {
    color: ${(props) =>
      props.$name ? props.theme.color.secondaryColor : '#000'};
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`
