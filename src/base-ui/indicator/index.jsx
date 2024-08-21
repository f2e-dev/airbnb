import { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex = 0 } = props
  const indicatorListRef = useRef()
  useEffect(() => {
    const selectedElement = indicatorListRef.current.children[selectedIndex]
    const selectedElementOffsetLeft = selectedElement.offsetLeft
    const selectedElementWidth = selectedElement.clientWidth
    const indicatorListWidth = indicatorListRef.current.clientWidth
    let distance =
      selectedElementOffsetLeft +
      selectedElementWidth * 0.5 -
      indicatorListWidth * 0.5
    const minDistance = 0
    const maxDistance =
      indicatorListRef.current.scrollWidth - indicatorListWidth
    if (distance < minDistance) {
      distance = 0
    }
    if (distance > maxDistance) {
      distance = maxDistance
    }
    indicatorListRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectedIndex])

  return (
    <IndicatorWrapper>
      <div className="indicator-list" ref={indicatorListRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number.isRequired
}

export default Indicator
