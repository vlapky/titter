import React from 'react'

import { IPostsProps } from '../interfaces/IPostProps'

import del from '../icons/close.svg'
import like from '../icons/heart.svg'

import '../styles/Post.scss'

export const Posts: React.FC<IPostsProps> = ({ posts, acceptDel }) => {
  return (
    <ul>
      {posts.map(({ author, text, liked }) => (
        <li className="Post">
          <article>
            <div className="Post__head">
              <a className="Post__head_user" href="/">
                {author}
              </a>
              {acceptDel && (
                <img src={del} alt="delete" className="Post__head_icon" />
              )}
              <img src={like} alt="like" className="Post__head_icon" />
            </div>
            <p className="Post_text">{text}</p>
            <p className="Post_liked">
              {`Понравилось: `}
              {liked.map((item) => (
                <span>{`${item} `}</span>
              ))}
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
