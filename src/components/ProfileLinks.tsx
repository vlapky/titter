import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileLinksProps } from '../interfaces/IProfileLinksProps'

export const ProfileLinks: React.FC<IProfileLinksProps> = ({ subs, curId }) => {
  return (
    <>
      {!subs && (
        <Link className="link" to="/feed">
          В ленту
        </Link>
      )}
      {subs && (
        <Link className="link" to={`/${curId}/${subs}`}>
          Назад
        </Link>
      )}
    </>
  )
}
