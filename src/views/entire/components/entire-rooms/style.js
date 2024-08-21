import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  padding: 20px 80px;
  margin-top: 128px;

  position: relative;

  .total {
    color: ${(props) => props.theme.text.secondaryColor};
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .list {
    margin: 0 -8px;

    display: flex;
    flex-wrap: wrap;
  }

  .cover {
    background-color: rgba(255, 255, 255, 0.8);

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`
