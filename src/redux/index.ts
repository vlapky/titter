import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../localStorage/Load'
import { saveToLocalStorage } from '../localStorage/Save'
import { initialState } from './initialState'
import rootReducer from './rootReducer'

const loadState = loadFromLocalStorage()
const state = loadState ? loadState : initialState

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: state,
})

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})
