interface IPost {
  id: string
  authorId: string
  author: string
  text: string
  liked: Array<string>
}

export interface IPostsProps {
  posts: Array<IPost>
  acceptDel?: boolean
}
