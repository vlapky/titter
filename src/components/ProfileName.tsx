import React from 'react'
import { IProfileName } from '../interfaces/IProfileName'
import { Input } from './Input'

export const ProfileName: React.FC<IProfileName> = ({
  userName,
  changeName,
  profileState,
}) => {
  const [inputVisible, changeVisible] = React.useState<Boolean>(false)

  const handleClick = () => {
    if (profileState === 'YOUR') changeVisible(!inputVisible)
  }
  return (
    <>
      <p onClick={handleClick} className="Profile__user">
        {userName}
      </p>
      {inputVisible && (
        <Input type="name" send={changeName} cancel={handleClick} />
      )}
    </>
  )
}
