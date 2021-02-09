import { IState } from '../interfaces/IState'

export const InitialState: IState = {
  users: {
    currentUser: '',
    byId: {
      user1: { name: 'vlapky', subscribedTo: [], subscribers: ['user2'] },
      user2: { name: 'Kiva', subscribedTo: ['user1'], subscribers: [] },
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
