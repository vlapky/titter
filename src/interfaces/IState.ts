interface IById {
  [key: string]: any
}

interface IUsers {
  currentUser: string
  byId: IById
  allIds: Array<string>
}

interface IPosts {
  byId: IById
  allIds: Array<string>
}

export interface IState {
  users: IUsers
  posts: IPosts
}
