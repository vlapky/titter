interface IPost {
  id: string
  author: string
  text: string
  liked: Array<string>
  [key: string]: string | Array<string>
}

interface IByIdPosts {
  [key: string]: IPost
}

export interface IPosts {
  byId: IByIdPosts
  allIds: Array<string>
}
