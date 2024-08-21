import { memo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Rate, Carousel } from 'antd'
import { RoomWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const carouselRef = useRef()

  const handleClickRoomItem = () => {
    if (itemClick) {
      itemClick(itemData)
    }
  }
  const handleClickControl = (e, isNext = true) => {
    e.stopPropagation()
    if (isNext) {
      carouselRef.current.next()
    } else {
      carouselRef.current.prev()
    }
    let newSelectedIndex = isNext ? selectedIndex + 1 : selectedIndex - 1
    const length = itemData.picture_urls.length
    if (newSelectedIndex < 0) {
      newSelectedIndex = length - 1
    }
    if (newSelectedIndex > length - 1) {
      newSelectedIndex = 0
    }
    setSelectedIndex(newSelectedIndex)
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const carouselElement = (
    <div className="carousel">
      <div className="control">
        <div className="btn prev" onClick={(e) => handleClickControl(e, false)}>
          <IconArrowLeft size={30} />
        </div>
        <div className="btn next" onClick={(e) => handleClickControl(e, true)}>
          <IconArrowRight size={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <div
                  className={classNames('dot', {
                    active: selectedIndex === index
                  })}
                ></div>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel ref={carouselRef} dots={false}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <RoomWrapper
      $color={itemData?.verify_info?.text_color || '#39576a'}
      $width={itemWidth}
      onClick={handleClickRoomItem}
    >
      <div className="inner">
        {itemData.picture_urls ? carouselElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="rate">
          <Rate
            value={itemData.star_rating ?? 5}
            allowHalf
            disabled
            style={{ fontSize: '12px', color: '#00848a' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
