import { IPosts } from '../interfaces/IPosts'
import { IUsers } from '../interfaces/IUsers'

export const PostsFuncs = {
  ExtractPost: function (id: string, posts: IPosts, users: IUsers) {
    let postData = posts.byId[id]
    return {
      id: postData.id,
      authorId: postData.author,
      author: users.byId[postData.author].name,
      text: postData.text,
      liked: postData.liked.map((id: string) => users.byId[id].name),
    }
  },

  FilterUsersPosts: function (usersIds: Array<string>, posts: IPosts) {
    return posts.allIds.filter((id: string) =>
      usersIds.includes(posts.byId[id].author)
    )
  },

  GeneratePosts: function (
    postsIds: Array<string>,
    posts: IPosts,
    users: IUsers
  ) {
    let postsArray = postsIds.map((id: string) => {
      return this.ExtractPost(id, posts, users)
    })
    return postsArray
  },
}
