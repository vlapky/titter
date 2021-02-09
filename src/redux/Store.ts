import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../localStorage/Load'
import { saveToLocalStorage } from '../localStorage/Save'
import { InitialState } from './InitialState'
import rootReducer from './RootReducer'

const loadState = loadFromLocalStorage()
const state = loadState ? loadState : InitialState

export const Store = configureStore({
  reducer: rootReducer,
  preloadedState: state,
})

Store.subscribe(() => {
  saveToLocalStorage(Store.getState())
})
