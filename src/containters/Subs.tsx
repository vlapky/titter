import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { IRouteParams } from '../interfaces/IRouteParams'
import { IState } from '../interfaces/IState'
import '../styles/Subs.scss'

export const Subs: React.FC = () => {
  const { id, subs } = useParams<IRouteParams>()
  const users = useSelector((state: IState) => state.users)
  const subsList = GetSubsList(id, subs, users)

  function GetSubsList(userId: string, subsType: string, users: any) {
    const subs = users.byId[userId][subsType]
    return subs.map((id: string) => ({
      userId: id,
      name: users.byId[id].name,
    }))
  }

  return (
    <div className="Subs">
      <Link className="link" to={`/${id}`}>
        Назад
      </Link>
      <ul className="Subs__list">
        {subsList.map((sub: any) => (
          <li key={sub.userId} className="Subs__list_item">
            <Link className="link" to={`/${id}/${subs}/${sub.userId}`}>
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
