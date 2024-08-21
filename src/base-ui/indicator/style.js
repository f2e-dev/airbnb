import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .indicator-list {
    transition: transform 200ms ease;

    display: flex;

    position: relative;

    > * {
      flex-shrink: 0;
    }
  }
`
