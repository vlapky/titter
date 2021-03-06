import { createReducer } from '@reduxjs/toolkit'
import { Actions } from './Actions'
import { InitialState } from './InitialState'

export const RootReducer = createReducer(InitialState, {
  [Actions.SignIn.type]: (state, action) => {
    //Вход старого пользователя
    state.users.allIds.forEach((id: string) => {
      let user = state.users.byId[id]
      if (user.name === action.payload) {
        state.users.currentUser = id
      }
    })
    //Регистрация нового пользователя
    if (state.users.currentUser === '') {
      const newUserId: string = `user${state.users.allIds.length + 1}`

      state.users.allIds.push(newUserId)
      state.users.byId[newUserId] = {
        name: action.payload,
        subscribedTo: [],
        subscribers: [],
      }

      state.users.currentUser = newUserId
    }
  },

  [Actions.SignOut.type]: (state) => {
    state.users.currentUser = ''
  },

  [Actions.Subscribe.type]: (state, action) => {
    const currentUser = state.users.currentUser
    const subUser = action.payload

    state.users.byId[currentUser].subscribedTo.push(subUser)
    state.users.byId[subUser].subscribers.push(currentUser)
  },

  [Actions.Unsubscribe.type]: (state, action) => {
    const currentUser = state.users.currentUser
    const subUser = action.payload

    const indexSubUser = state.users.byId[currentUser].subscribedTo.indexOf(
      subUser
    )
    state.users.byId[currentUser].subscribedTo.splice(indexSubUser, 1)

    const indexCurUser = state.users.byId[subUser].subscribers.indexOf(
      currentUser
    )
    state.users.byId[subUser].subscribers.splice(indexCurUser, 1)
  },

  [Actions.AddPost.type]: (state, action) => {
    const postId = `${new Date().getUTCMilliseconds()}`

    state.posts.allIds.push(postId)
    state.posts.byId[postId] = {
      id: postId,
      author: state.users.currentUser,
      text: action.payload,
      liked: [],
    }
  },

  [Actions.DelPost.type]: (state, action) => {
    const delPostId = action.payload
    const indexDelPost = state.posts.allIds.indexOf(delPostId)

    state.posts.allIds.splice(indexDelPost, 1)
    delete state.posts.byId[delPostId]
  },

  [Actions.LikePost.type]: (state, action) => {
    const likePostId = action.payload
    const currentUser = state.users.currentUser
    const indexLike = state.posts.byId[likePostId].liked.indexOf(currentUser)

    if (indexLike === -1) {
      //если лайк не стоит, поставить
      state.posts.byId[likePostId].liked.push(currentUser)
    } else {
      //если лайк стоит, убрать
      state.posts.byId[likePostId].liked.splice(indexLike, 1)
    }
  },

  [Actions.ChangeName.type]: (state, action) => {
    const newName = action.payload
    const currentUser = state.users.currentUser
    let acceptName = true
    //проверка доступности имени
    state.users.allIds.forEach((userId) => {
      if (state.users.byId[userId].name === newName) acceptName = false
    })
    //замена имени
    if (acceptName) state.users.byId[currentUser].name = newName
  },
})
