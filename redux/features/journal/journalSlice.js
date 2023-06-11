import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const journalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setJournal: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setJournal } = journalSlice.actions

export default journalSlice.reducer
