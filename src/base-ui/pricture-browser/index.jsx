import { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import IconArrowBottom from '@/assets/svg/icon_arrow_bottom'
import IconArrowTop from '@/assets/svg/icon_arrow_top'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
  const { pictures, handleClosePictureBrowser } = props
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isRenderList, setIsRenderList] = useState(true)

  const handleClickClose = () => {
    if (handleClosePictureBrowser) {
      handleClosePictureBrowser()
    }
  }
  const handleClickControl = (isNext = true) => {
    let newCurrentPictureIndex = isNext
      ? currentPictureIndex + 1
      : currentPictureIndex - 1
    if (newCurrentPictureIndex < 0) {
      newCurrentPictureIndex = pictures.length - 1
    }
    if (newCurrentPictureIndex > pictures.length - 1) {
      newCurrentPictureIndex = 0
    }
    setCurrentPictureIndex(newCurrentPictureIndex)
    setIsNext(isNext)
  }
  const handleClickPictureItem = (index) => {
    if (index === currentPictureIndex) {
      return
    } else if (index > currentPictureIndex) {
      setIsNext(true)
    } else {
      setIsNext(false)
    }
    setCurrentPictureIndex(index)
  }

  return (
    <BrowserWrapper $isNext={isNext} $isRenderList={isRenderList}>
      <div className="top">
        <div className="close" onClick={handleClickClose}>
          <IconClose />
        </div>
      </div>
      <div className="carousel">
        <div className="control">
          <div className="btn prev" onClick={() => handleClickControl(false)}>
            <IconArrowLeft size={77} />
          </div>
          <div className="btn next" onClick={() => handleClickControl(true)}>
            <IconArrowRight size={77} />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              classNames="picture"
              key={pictures[currentPictureIndex]}
              timeout={200}
            >
              <img src={pictures[currentPictureIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentPictureIndex + 1}/{pictures.length}
              </span>
              <span> room apartment picture{currentPictureIndex + 1}</span>
            </div>
            <div
              className="toggle"
              onClick={() => setIsRenderList(!isRenderList)}
            >
              <span>{isRenderList ? '隐藏' : '显示'}照片列表</span>
              {isRenderList ? <IconArrowBottom /> : <IconArrowTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={currentPictureIndex}>
              {pictures?.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: currentPictureIndex === index
                    })}
                    key={item}
                    onClick={() => handleClickPictureItem(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictures: PropTypes.array,
  handleClosePictureBrowser: PropTypes.func
}

export default PictureBrowser
