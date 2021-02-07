import React from 'react'
import { IProfileName } from '../interfaces/IProfileName'
import { Input } from './Input'

export const ProfileName: React.FC<IProfileName> = ({
  userName,
  changeName,
  profileState,
}) => {
  const [inputVisible, changeVisible] = React.useState<Boolean>(false)

  const handleCancel = () => {
    if (profileState === 'YOUR') changeVisible(!inputVisible)
  }
  return (
    <>
      <p onClick={handleCancel} className="Profile__user">
        {userName}
      </p>
      {inputVisible && (
        <Input type="name" send={changeName} cancel={handleCancel} />
      )}
    </>
  )
}
