import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../redux/rootReducer'
import '../styles/SignIn.scss'

export const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const [signInValue, changeSignIn] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSignIn(e.target.value)
  }

  return (
    <div className="SignIn">
      <label htmlFor="sign-in" className="SignIn__title">
        Введите имя
      </label>
      <input
        maxLength={12}
        value={signInValue}
        onChange={handleChange}
        className="SignIn__input"
        id="sign-in"
        type="text"
        placeholder="vlapky"
      />
      <button
        disabled={!(signInValue.length > 3)}
        onClick={() => dispatch(signIn(signInValue))}
        className="button"
      >
        Продолжить
      </button>
    </div>
  )
}
