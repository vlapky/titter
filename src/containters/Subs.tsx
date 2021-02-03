import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Subs.scss'

const Arr = ['Lala', 'Lola', 'Lilo', 'Sky', 'Kiva', 'Vivaldiny120']

export const Subs: React.FC = () => {
  return (
    <div className="Subs">
      <Link className="link" to="/profile">
        Назад
      </Link>
      <ul className="Subs__list">
        {Arr.map((item) => (
          <li className="Subs__list_item">
            <a className="link" href="/">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
