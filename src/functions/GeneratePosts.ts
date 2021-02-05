import ExtractPost from './ExtractPost'

export default function GeneratePosts(
  postsIds: Array<string>,
  posts: any,
  users: any
) {
  let postsArray = postsIds.map((id: string) => {
    return ExtractPost(id, posts, users)
  })
  return postsArray
}
