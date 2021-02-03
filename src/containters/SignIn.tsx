import React from 'react'
import '../styles/SignIn.scss'

import { useDispatch } from 'react-redux'
import { signIn } from '../redux/mainReducer'

export const SignIn: React.FC = () => {
  return (
    <div className="SignIn">
      <label htmlFor="sign-in" className="SignIn__title">
        Введите имя
      </label>
      <input
        className="SignIn__input"
        id="sign-in"
        type="text"
        placeholder="vlapky"
      />
      {/* dispatch({ type: 'SIGN_IN', payload: 'vlapky' })} */}
      <button onClick={() => signIn('vlapky')} className="button">
        Продолжить
      </button>
    </div>
  )
}
