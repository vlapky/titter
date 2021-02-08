import React from 'react'
import { IProfileButtonsProps } from '../interfaces/IProfileButtonsProps'
import { Input } from './Input'

export const ProfileButtons: React.FC<IProfileButtonsProps> = ({
  profileState,
  handleSignOut,
  handleAddPost,
  handleSub,
  handleUnsub,
}) => {
  const [inputVisible, changeVisible] = React.useState<Boolean>(false)
  console.log(handleSub)

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
