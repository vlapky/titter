import React from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../redux/Actions'
import '../styles/Login.scss'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [signInValue, changeSignIn] = React.useState('')

  const acceptSend = signInValue.length > 3

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSignIn(e.target.value)
  }
  const handleSend = () => {
    dispatch(Actions.SignIn(signInValue))
    changeSignIn('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (acceptSend) {
        dispatch(Actions.SignIn(signInValue))
        changeSignIn('')
      }
    }
  }

  return (
    <div className="Login">
      <label htmlFor="name" className="Login__title">
        Введите имя
      </label>
      <input
        maxLength={12}
        value={signInValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="Login__input"
        id="name"
        type="text"
        placeholder="vlapky"
      />
      <button disabled={!acceptSend} onClick={handleSend} className="button">
        Продолжить
      </button>
    </div>
  )
}
