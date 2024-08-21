import { memo } from 'react'
import PropTypes from 'prop-types'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  const { roomList = [], roomItemWidth } = props

  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return (
          <RoomItem key={item.id} itemData={item} itemWidth={roomItemWidth} />
        )
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
