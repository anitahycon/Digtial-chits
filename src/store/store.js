import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Features/Auth/AuthSlice'
import UserChitReducer from '../Features/UserChits/UserChitsSlice'
export const store = configureStore({
  reducer: {
    auth : AuthReducer,
    userchit : UserChitReducer
  },
})