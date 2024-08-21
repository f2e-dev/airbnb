import { memo, useState, useRef, useEffect } from 'react'

import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const ScrollView = memo((props) => {
  const [isRenderLeftArrow, setIsRenderLeftArrow] = useState(false)
  const [isRenderRightArrow, setIsRenderRightArrow] = useState(false)
  const positionIndexRef = useRef()
  const scrollDistanceRef = useRef()
  const slotRef = useRef()
  useEffect(() => {
    const slotClientWidth = slotRef.current.clientWidth
    const slotScrollWidth = slotRef.current.scrollWidth
    const scrollDistance = slotScrollWidth - slotClientWidth
    positionIndexRef.current = 0
    scrollDistanceRef.current = scrollDistance
    setIsRenderRightArrow(scrollDistance > 0)
  }, [])

  const handleClickTranslate = (isRight) => {
    const positionIndex = positionIndexRef.current
    const newPositionIndex = positionIndex + (isRight ? 1 : -1)
    const newPositionElement = slotRef.current.children[newPositionIndex]
    const offsetLeft = newPositionElement.offsetLeft
    slotRef.current.style.transform = `translateX(-${offsetLeft}px)`
    positionIndexRef.current = newPositionIndex
    setIsRenderLeftArrow(offsetLeft > 0)
    setIsRenderRightArrow(offsetLeft < scrollDistanceRef.current)
  }

  return (
    <ViewWrapper>
      <div className="slot-container">
        <div className="slot" ref={slotRef}>
          {props.children}
        </div>
      </div>
      {isRenderLeftArrow && (
        <div
          className="translate left"
          onClick={() => handleClickTranslate(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {isRenderRightArrow && (
        <div
          className="translate right"
          onClick={() => handleClickTranslate(true)}
        >
          <IconArrowRight />
        </div>
      )}
    </ViewWrapper>
  )
})

export default ScrollView
