import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Posts } from '../components/Posts'
import { IState } from '../interfaces/IState'
import '../styles/Profile.scss'
import ExtractName from '../functions/ExtractName'
import { IRouteParams } from '../interfaces/IRouteParams'
import GetProfileState from '../functions/GetProfileState'
import { signOut } from '../redux/rootReducer'
import FilterUsersPosts from '../functions/FilterUsersPosts'
import GeneratePosts from '../functions/GeneratePosts'

const profileLinkTitle = ['В ленту', 'Назад']

export const Profile: React.FC = () => {
  const { id } = useParams<IRouteParams>()
  const users = useSelector((state: IState) => state.users)
  const posts = useSelector((state: IState) => state.posts)
  const dispatch = useDispatch()
  const profileState = GetProfileState(id, users)
  const userPostsIds = FilterUsersPosts([id], posts)
  const userPosts = GeneratePosts(userPostsIds, posts, users)

  //Создать экшены подписок

  return (
    <div className="Profile">
      <Link className="link" to="/feed">
        {profileLinkTitle[0]}
      </Link>
      <p className="Profile__user">{ExtractName(id, users)}</p>
      <Link to="/subs" className="link">
        Подписки - {users.byId[id].subsYou.length} пользователей
      </Link>
      <Link to="/subs" className="link">
        Подписчики - {users.byId[id].subsMe.length} пользователей
      </Link>
      {profileState === 'YOUR' && (
        <button onClick={() => dispatch(signOut())} className="button">
          Выйти
        </button>
      )}
      {profileState === 'YOUR' && (
        <button className="button">Добавить пост</button>
      )}
      {profileState === 'SUB' && (
        <button onClick={() => dispatch(signOut())} className="button">
          Отписаться
        </button>
      )}
      {profileState === 'NONE' && (
        <button onClick={() => dispatch(signOut())} className="button">
          Подписаться
        </button>
      )}
      <Posts posts={userPosts} acceptDel={true} />
    </div>
  )
}
