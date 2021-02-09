import React from 'react'

interface IFeedButtonsProps {
  postsType: string
  changeType: (postsType: string) => void
}

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
