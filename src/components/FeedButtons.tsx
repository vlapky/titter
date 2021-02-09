import React from 'react'
import { IFeedButtonsProps } from '../interfaces/IFeedButtonsProps'

export const FeedButtons: React.FC<IFeedButtonsProps> = ({
  postsType,
  changeType,
}) => {
  return (
    <div>
      <button
        onClick={() => changeType('all')}
        className={`button feedbutton ${postsType === 'all' && 'active'}`}
      >
        Все посты
      </button>
      <button
        onClick={() => changeType('subs')}
        className={`button feedbutton ${postsType === 'subs' && 'active'}`}
      >
        Подписки
      </button>
    </div>
  )
}
