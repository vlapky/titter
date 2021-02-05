import { createAction, createReducer } from '@reduxjs/toolkit'
import { IState } from '../interfaces/IState'

const initialState: IState = {
  login: false,
  users: {
    currentUser: '',
    byId: {
      user1: { name: 'vlapky', subsYou: [], subsMe: ['user2'] },
      user2: { name: 'Kiva', subsYou: ['user1'], subsMe: ['user1'] },
    },
    allIds: ['user1', 'user2'],
  },
  posts: {
    byId: {
      post1: {
        id: 'post1',
        author: 'user1',
        text: 'Welcome to Titter by vlapky',
        liked: ['user1', 'user2'],
      },
      post2: {
        id: 'post2',
        author: 'user2',
        text: 'Welcome to Titter by vlapky by Kiva',
        liked: ['user2', 'user1'],
      },
    },
    allIds: ['post1', 'post2'],
  },
}

export const signIn = createAction<string>('SIGN_IN')
export const signOut = createAction<void>('SIGN_OUT')

export default createReducer(initialState, {
  [signIn.type]: (state, action) => {
    //login user
    state.users.allIds.forEach((id: string) => {
      let user = state.users.byId[id]
      if (user.name === action.payload) {
        state.users.currentUser = id
        state.login = true
      }
    })
    //create new user
    if (!state.login) {
      let newUserId: string = `user${state.users.allIds.length + 1}`
      state.users.allIds.push(newUserId)
      state.users.byId[newUserId] = {
        name: action.payload,
        subsYou: [],
        subsMe: [],
      }
      state.users.currentUser = newUserId
      state.login = true
    }
  },
  [signOut.type]: (state) => {
    state.users.currentUser = ''
    state.login = false
  },
})
