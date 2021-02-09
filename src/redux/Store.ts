import { configureStore } from '@reduxjs/toolkit'
import { InitialState } from './InitialState'
import { RootReducer } from './RootReducer'

const loadFromLocalStorage: any = () => {
  try {
    const serializedState: any = localStorage.getItem('titter-storage')
    return JSON.parse(serializedState)
  } catch (e) {
    throw new Error(e)
  }
}

const saveToLocalStorage: any = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('titter-storage', serializedState)
  } catch (e) {
    throw new Error(e)
  }
}

const loadState = loadFromLocalStorage()
const state = loadState ? loadState : InitialState

export const Store = configureStore({
  reducer: RootReducer,
  preloadedState: state,
})

Store.subscribe(() => {
  saveToLocalStorage(Store.getState())
})
