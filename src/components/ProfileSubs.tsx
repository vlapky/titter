import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileSubsProps } from '../interfaces/IProfileSubsProps'

export const ProfileSubs: React.FC<IProfileSubsProps> = ({ id, users }) => {
  const subscribedToLen = users.byId[id].subscribedTo.length
  const subscribersLen = users.byId[id].subscribers.length

  return (
    <>
      <Link to={`/${id}/subscribedTo`} className="link">
        Подписки - {subscribedToLen} пользователей
      </Link>
      <Link to={`/${id}/subscribers`} className="link">
        Подписчики - {subscribersLen} пользователей
      </Link>
    </>
  )
}
