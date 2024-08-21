import styled from 'styled-components'

export const ViewWrapper = styled.div`
  padding: 8px 0;

  position: relative;

  .slot-container {
    overflow: hidden;

    .slot {
      transition: transform 200ms ease;

      display: flex;
    }
  }

  .translate {
    width: 28px;
    height: 28px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;

    &.left {
      transform: translate(-50%, -50%);

      left: 0;
    }

    &.right {
      transform: translate(50%, -50%);

      right: 0;
    }
  }
`
