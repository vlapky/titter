import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import GetSubsList from '../functions/GetSubsList'
import { IRouteParams } from '../interfaces/IRouteParams'
import { IState } from '../interfaces/IState'
import '../styles/Subs.scss'

export const Subs: React.FC = () => {
  const { id, subs } = useParams<IRouteParams>()
  const users = useSelector((state: IState) => state.users)
  const subsList = GetSubsList(id, subs, users)
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
