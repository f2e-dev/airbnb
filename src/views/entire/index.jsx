import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './components/entire-filter'
import EntireRooms from './components/entire-rooms'
import EntirePagination from './components/entire-pagination'

import { setHeaderConfigAction } from '@/store/modules/main'
import { fetchEntireDataAction } from '@/store/modules/entire'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setHeaderConfigAction({
        isFixed: true,
        isTopTransparency: false
      })
    )
    dispatch(fetchEntireDataAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
