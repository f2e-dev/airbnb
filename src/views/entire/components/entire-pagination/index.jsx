import { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { PaginationWrapper } from './style'
import { Pagination } from 'antd'

import { setCurrentPageAction } from '@/store/modules/entire'
import { fetchEntireDataAction } from '@/store/modules/entire'

const EntirePagination = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => {
    return {
      currentPage: state.entireReducer.currentPage,
      totalCount: state.entireReducer.totalCount
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const handleChange = (page) => {
    dispatch(setCurrentPageAction(page - 1))
    dispatch(fetchEntireDataAction())
  }

  return (
    <PaginationWrapper>
      <Pagination
        align="center"
        defaultCurrent={currentPage}
        defaultPageSize={20}
        total={totalCount}
        showSizeChanger={false}
        onChange={handleChange}
      />
    </PaginationWrapper>
  )
})

export default EntirePagination
