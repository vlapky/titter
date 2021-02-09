import { createAction } from '@reduxjs/toolkit'

export const Actions = {
  AddPost: createAction<string>('ADD_POST'),
  ChangeName: createAction<string>('CHANGE_NAME'),
  DelPost: createAction<string>('DEL_POST'),
  LikePost: createAction<string>('LIKE_POST'),
  SignOut: createAction<void>('SIGN_OUT'),
  SignIn: createAction<string>('SIGN_IN'),
  Subscribe: createAction<string>('SUB'),
  Unsubscribe: createAction<string>('UNSUB'),
}
