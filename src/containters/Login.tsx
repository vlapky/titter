import React from 'react'
import { useDispatch } from 'react-redux'
import { SignIn } from '../redux/RootReducer'
import '../styles/Login.scss'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [signInValue, changeSignIn] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSignIn(e.target.value)
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
        className="Login__input"
        id="name"
        type="text"
        placeholder="vlapky"
      />
      <button
        disabled={!(signInValue.length > 3)}
        onClick={() => dispatch(SignIn(signInValue))}
        className="button"
      >
        Продолжить
      </button>
    </div>
  )
}
