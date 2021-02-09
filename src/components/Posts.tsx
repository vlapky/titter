import React from 'react'
import { Link } from 'react-router-dom'
import del from '../icons/close.svg'
import like from '../icons/heart.svg'
import '../styles/Post.scss'

interface IPost {
  id: string
  authorId: string
  author: string
  text: string
  liked: Array<string>
}

interface IPostsProps {
  posts: Array<IPost>
  currentUser: string
  likePost: (id: string) => void
  delPost: (id: string) => void
}

export const Posts: React.FC<IPostsProps> = ({
  posts,
  likePost,
  delPost,
  currentUser,
}) => {
  return (
    <ul>
      {posts
        .slice(0)
        .reverse()
        .map(({ id, authorId, author, text, liked }) => (
          <li key={id} className="Post">
            <article>
              <div className="Post__head">
                <Link className="Post__head_user" to={`/${authorId}`}>
                  {author}
                </Link>
                {currentUser === authorId && (
                  <img
                    onClick={() => delPost(id)}
                    src={del}
                    alt="delete"
                    className="Post__head_icon"
                  />
                )}
                <img
                  onClick={() => likePost(id)}
                  src={like}
                  alt="like"
                  className="Post__head_icon"
                />
              </div>
              <p className="Post_text">{text}</p>
              <p className="Post_liked">
                {`Понравилось: `}
                <span>{liked.join(', ')}</span>
              </p>
            </article>
          </li>
        ))}
    </ul>
  )
}
