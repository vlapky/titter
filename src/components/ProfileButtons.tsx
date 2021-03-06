import React from 'react'
import { Input } from './Input'

interface IProfileButtonsProps {
  profileState: string
  handleSignOut: () => void
  handleAddPost: (text: string) => void
  handleSub: () => void
  handleUnsub: () => void
}

export const ProfileButtons: React.FC<IProfileButtonsProps> = ({
  profileState,
  handleSignOut,
  handleAddPost,
  handleSub,
  handleUnsub,
}) => {
  const [inputVisible, changeVisible] = React.useState<Boolean>(false)

  return (
    <>
      {profileState === 'YOUR' && (
        <>
          <button onClick={handleSignOut} className="button">
            Выйти
          </button>
          {!inputVisible && (
            <button onClick={() => changeVisible(true)} className="button">
              Добавить пост
            </button>
          )}
          {inputVisible && (
            <Input
              type="post"
              cancel={() => changeVisible(false)}
              send={handleAddPost}
            />
          )}
        </>
      )}
      {profileState === 'SUB' && (
        <button onClick={handleUnsub} className="button">
          Отписаться
        </button>
      )}
      {profileState === 'NONE' && (
        <button onClick={handleSub} className="button">
          Подписаться
        </button>
      )}
    </>
  )
}
