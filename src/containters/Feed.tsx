import React from 'react'
import '../styles/Feed.scss'
import { Posts } from '../components/Posts'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../interfaces/IState'
import { FeedButtons } from '../components/FeedButtons'
import { PostsFuncs } from '../functions/PostsFuncs'
import { Actions } from '../redux/Actions'

export const Feed: React.FC = () => {
  const users = useSelector((state: IState) => state.users)
  const posts = useSelector((state: IState) => state.posts)
  const dispatch = useDispatch()

  const [postsType, changePostsType] = React.useState<string>('all')
  const currentUser = users.currentUser
  const allPosts = PostsFuncs.GeneratePosts(posts.allIds, posts, users)
  const subsPosts = PostsFuncs.GeneratePosts(
    PostsFuncs.FilterUsersPosts(
      [...users.byId[users.currentUser].subscribedTo, users.currentUser],
      posts
    ),
    posts,
    users
  )

  return (
    <div className="Feed">
      <Link className="link" to={`/${currentUser}`}>
        В профиль
      </Link>
      <FeedButtons postsType={postsType} changeType={changePostsType} />
      <Posts
        postsView={postsType === 'all' ? allPosts : subsPosts}
        currentUser={currentUser}
        likePost={(id) => dispatch(Actions.LikePost(id))}
        delPost={(id) => dispatch(Actions.DelPost(id))}
      />
    </div>
  )
}
