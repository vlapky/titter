const PostsFuncs = {
  ExtractPost: function ExtractPost(id: string, posts: any, users: any) {
    let postData = posts.byId[id]
    return {
      id: postData.id,
      authorId: postData.author,
      author: users.byId[postData.author].name,
      text: postData.text,
      liked: postData.liked.map((id: string) => users.byId[id].name),
    }
  },

  FilterUsersPosts: function FilterUsersPosts(
    usersIds: Array<string>,
    posts: any
  ) {
    return posts.allIds.filter((id: string) =>
      usersIds.includes(posts.byId[id].author)
    )
  },

  GeneratePosts: function GeneratePosts(
    postsIds: Array<string>,
    posts: any,
    users: any
  ) {
    let postsArray = postsIds.map((id: string) => {
      return this.ExtractPost(id, posts, users)
    })
    return postsArray
  },
}

export default PostsFuncs
