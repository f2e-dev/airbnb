import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getEntireListData } from '@/services'

export const fetchEntireDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch, getState }) => {
    const currentPage = getState().entireReducer.currentPage
    dispatch(setIsLoadingAction(true))
    getEntireListData(currentPage * 20).then((res) => {
      dispatch(setIsLoadingAction(false))
      dispatch(setRoomListAction(res.list))
      dispatch(setTotalCountAction(res.totalCount))
    })
  }
)

const entireSlice = createSlice({
  name: 'entireSlice',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    setCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    setRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    setTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    setIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})

export const {
  setCurrentPageAction,
  setRoomListAction,
  setTotalCountAction,
  setIsLoadingAction
} = entireSlice.actions
export default entireSlice.reducer
