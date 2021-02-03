import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from './mainReducer'

const rootReducer = combineReducers({
  users: usersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
