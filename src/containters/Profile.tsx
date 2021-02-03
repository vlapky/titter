import React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from '../components/Posts'

import '../styles/Profile.scss'

const Arr = '123456'.split('').map(() => ({
  author: `User 1`,
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil nesciunt id velit laborum. Sint iusto dolorum veritatis delectus ea nisi, nemo ut iste quod quis quam corporis perferendis minima voluptatibus dolores architecto blanditiis excepturi. Dolore, repellat neque quas et labore quisquam reiciendis.',
  liked: ['User 1', 'User 2', 'User 3'],
}))

const subs = {
  subscriptions: 140,
  subscribers: 1300,
}

const profileButtonTitle = ['Подписаться', 'Отписаться', 'Выйти']
const profileLinkTitle = ['В ленту', 'Назад']
const add = false

export const Profile: React.FC = () => {
  return (
    <div className="Profile">
      <Link className="link" to="/feed">
        {profileLinkTitle[0]}
      </Link>
      <p className="Profile__user">User 1</p>
      <Link to="/subs" className="link">
        Вы подписаны на {subs.subscriptions} пользователей
      </Link>
      <Link to="/subs" className="link">
        На вас подписано {subs.subscribers} пользователей
      </Link>
      <button className="button">{profileButtonTitle[2]}</button>
      {add && <button className="button">Добавить пост</button>}
      <Posts posts={Arr} acceptDel={true} />
    </div>
  )
}
