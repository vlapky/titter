import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileSubsProps } from '../interfaces/IProfileSubsProps'

export const ProfileSubs: React.FC<IProfileSubsProps> = ({ id, users }) => {
  const subsYouLen = users.byId[id].subsYou.length
  const subsMeLen = users.byId[id].subsMe.length

  return (
    <>
      <Link to={`/${id}/subsYou`} className="link">
        Подписки - {subsYouLen} пользователей
      </Link>
      <Link to={`/${id}/subsMe`} className="link">
        Подписчики - {subsMeLen} пользователей
      </Link>
    </>
  )
}
