import ExtractName from './ExtractName'

export default function ExtractPost(id: string, posts: any, users: any) {
  let postData = posts.byId[id]
  let post = {
    id: postData.id,
    authorId: postData.author,
    author: ExtractName(postData.author, users),
    text: postData.text,
    liked: postData.liked.map((id: string) => ExtractName(id, users)),
  }
  return post
}
