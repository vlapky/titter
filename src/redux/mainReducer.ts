import { createAction, createReducer } from '@reduxjs/toolkit'

interface IUsers {
  currentUser: string
  byId: Object
  AllIds: Array<string>
}

export interface IState {
  users: IUsers
}

const initialState = {
  currentUser: '',
  byId: {
    user1: 'vlapky',
    user2: 'Kiva',
  },
  AllIds: ['user1', 'user2'],
}

export const addUser = createAction<string>('ADD_USER')
export const signIn = createAction<string>('SIGN_IN')
export const signOut = createAction<void>('SIGN_OUT')

export default createReducer(initialState, {
  [addUser.type]: (state) => {
    let newUserId = state.AllIds.length + 1
    state.AllIds.push(`user${newUserId}`)
  },
  [signIn.type]: (state, action) => {
    state.currentUser = action.payload
  },
  [signOut.type]: (state) => {
    state.currentUser = ''
  },
})
