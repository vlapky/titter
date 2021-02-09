interface IUser {
  name: string
  subscribedTo: Array<string>
  subscribers: Array<string>
  [key: string]: any
}

interface IByIdUsers {
  [key: string]: IUser
}
export interface IUsers {
  currentUser: string
  byId: IByIdUsers
  allIds: Array<string>
}
