interface IById {
  [key: string]: any | null
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
  login: boolean
  users: IUsers
  posts: IPosts
}
