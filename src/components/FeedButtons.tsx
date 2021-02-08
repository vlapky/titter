import React from 'react'

interface FeedButtonsProps {
  postsType: string
  changeType: any
}

export const FeedButtons: React.FC<FeedButtonsProps> = ({
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
