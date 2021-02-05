export default function FilterUsersPosts(usersIds: Array<string>, posts: any) {
  let filterPostsIds: Array<string> = posts.allIds.filter((id: string) =>
    usersIds.includes(posts.byId[id].author)
  )
  return filterPostsIds
}
