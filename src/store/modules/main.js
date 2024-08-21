import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: {
    headerConfig: {
      isFixed: false,
      isTopTransparency: false
    }
  },
  reducers: {
    setHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { setHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
