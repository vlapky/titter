import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { IRouteParams } from '../interfaces/IRouteParams'
import { IState } from '../interfaces/IState'
import '../styles/Subs.scss'

interface ISubsListItem {
  userId: string
  name: string
}

export const Subs: React.FC = () => {
  const { id, subs } = useParams<IRouteParams>()
  const users = useSelector((state: IState) => state.users)
  const subsList: Array<ISubsListItem> = users.byId[id][subs].map(
    (id: string): ISubsListItem => ({
      userId: id,
      name: users.byId[id].name,
    })
  )

  return (
    <div className="Subs">
      <Link className="link" to={`/${id}`}>
        Назад
      </Link>
      <ul className="Subs__list">
        {subsList.map((sub) => (
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
