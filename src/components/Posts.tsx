import React from 'react'
import { IPostsProps } from '../interfaces/IPostProps'
import del from '../icons/close.svg'
import like from '../icons/heart.svg'
import '../styles/Post.scss'
import { Link } from 'react-router-dom'

export const Posts: React.FC<IPostsProps> = ({ posts, acceptDel }) => {
  return (
    <ul>
      {posts.map(({ id, authorId, author, text, liked }) => (
        <li key={id} className="Post">
          <article>
            <div className="Post__head">
              <Link className="Post__head_user" to={`/${authorId}`}>
                {author}
              </Link>
              {acceptDel && (
                <img src={del} alt="delete" className="Post__head_icon" />
              )}
              <img src={like} alt="like" className="Post__head_icon" />
            </div>
            <p className="Post_text">{text}</p>
            <p className="Post_liked">
              {`Понравилось: `}
              {liked.map((item) => (
                <span key={`like-by-${item}`}>{`${item} `}</span>
              ))}
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
