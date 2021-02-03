import React from 'react'
import '../styles/Feed.scss'
import { Posts } from '../components/Posts'
import { Link } from 'react-router-dom'

const Arr = '123456789012312'.split('').map((item, index) => ({
  author: `User ${item}-${index}`,
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil nesciunt id velit laborum. Sint iusto dolorum veritatis delectus ea nisi, nemo ut iste quod quis quam corporis perferendis minima voluptatibus dolores architecto blanditiis excepturi. Dolore, repellat neque quas et labore quisquam reiciendis.',
  liked: ['User 1', 'User 2', 'User 3'],
}))

export const Feed: React.FC = () => {
  return (
    <div className="Feed">
      <Link className="link" to="/profile">
        В профиль
      </Link>
      <div>
        <button className="button feedbutton">Все посты</button>
        <button className="button feedbutton">Подписки</button>
      </div>
      <Posts posts={Arr} acceptDel={false} />
    </div>
  )
}
