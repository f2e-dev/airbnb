import { memo, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { Skeleton } from 'antd'

import { setRoomDataAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entireReducer.roomList,
      totalCount: state.entireReducer.totalCount,
      isLoading: state.entireReducer.isLoading
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickRoomItem = useCallback(
    (itemData) => {
      dispatch(setRoomDataAction(itemData))
      navigate('/detail')
    },
    [dispatch, navigate]
  )

  return (
    <RoomsWrapper>
      {roomList.length > 0 && <div className="total">{totalCount}处住宿</div>}
      <div className="list">
        {roomList?.map((item) => {
          return (
            <RoomItem
              key={item._id}
              itemData={item}
              itemWidth="20%"
              itemClick={handleClickRoomItem}
            />
          )
        })}
      </div>
      {isLoading && roomList.length === 0 && <Skeleton active />}
      {isLoading && roomList.length > 0 && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms
