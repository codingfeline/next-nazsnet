'use client'

import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import counterSlice from './features/counter/counterSlice'
import journalSlice from './features/journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice,
    journal: journalSlice,
  },
})
