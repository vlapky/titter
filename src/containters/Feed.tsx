import React from 'react'
import '../styles/Feed.scss'
import { Posts } from '../components/Posts'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../interfaces/IState'
import GeneratePosts from '../functions/GeneratePosts'
import FilterUsersPosts from '../functions/FilterUsersPosts'
import { delPost, likePost } from '../redux/rootReducer'

export const Feed: React.FC = () => {
  const [postsType, changePostsType] = React.useState('all')
  const users = useSelector((state: IState) => state.users)
  const posts = useSelector((state: IState) => state.posts)
  const dispatch = useDispatch()
  const currentUser = users.currentUser
  const allPosts: any = GeneratePosts(posts.allIds, posts, users)
  const subsPosts: any = GeneratePosts(
    FilterUsersPosts(
      [...users.byId[users.currentUser].subsYou, users.currentUser],
      posts
    ),
    posts,
    users
  )

  const handleLikePost = (id: string) => {
    dispatch(likePost(id))
  }

  const handleDelPost = (id: string) => {
    dispatch(delPost(id))
  }

  return (
    <div className="Feed">
      <Link className="link" to={`/${currentUser}`}>
        В профиль
      </Link>
      <div>
        <button
          onClick={() => changePostsType('all')}
          className={`button feedbutton ${postsType === 'all' && 'active'}`}
        >
          Все посты
        </button>
        <button
          onClick={() => changePostsType('subs')}
          className={`button feedbutton ${postsType === 'subs' && 'active'}`}
        >
          Подписки
        </button>
      </div>
      <Posts
        posts={postsType === 'all' ? allPosts : subsPosts}
        currentUser={currentUser}
        likePost={handleLikePost}
        delPost={handleDelPost}
      />
    </div>
  )
}
