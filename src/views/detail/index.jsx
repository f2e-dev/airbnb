import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './components/detail-pictures'
import DetailInfo from './components/detail-info'

import { setHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setHeaderConfigAction({
        isFixed: false,
        isTopTransparency: false
      })
    )
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail
