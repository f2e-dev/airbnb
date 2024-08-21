import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getHomeDiscountData,
  getHomeHotRecommenddestData,
  getHomeLongForData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomePlusData
} from '@/services'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getHomeDiscountData().then((res) => {
      dispatch(setDiscountDataAction(res))
    })
    getHomeHotRecommenddestData().then((res) => {
      dispatch(setHotRecommenddestDataAction(res))
    })
    getHomeLongForData().then((res) => {
      dispatch(setLongForDataAction(res))
    })
    getHomeGoodPriceData().then((res) => {
      dispatch(setGoodPriceDataAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(setHighScoreDataAction(res))
    })
    getHomePlusData().then((res) => {
      dispatch(setPlusDataAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    discountData: {},
    hotRecommenddestData: {},
    longForData: {},
    goodPriceData: {},
    highScoreData: {},
    plusData: {}
  },
  reducers: {
    setDiscountDataAction(state, { payload }) {
      state.discountData = payload
    },
    setHotRecommenddestDataAction(state, { payload }) {
      state.hotRecommenddestData = payload
    },
    setLongForDataAction(state, { payload }) {
      state.longForData = payload
    },
    setGoodPriceDataAction(state, { payload }) {
      state.goodPriceData = payload
    },
    setHighScoreDataAction(state, { payload }) {
      state.highScoreData = payload
    },
    setPlusDataAction(state, { payload }) {
      state.plusData = payload
    }
  }
})

export const {
  setDiscountDataAction,
  setHotRecommenddestDataAction,
  setLongForDataAction,
  setGoodPriceDataAction,
  setHighScoreDataAction,
  setPlusDataAction
} = homeSlice.actions
export default homeSlice.reducer
