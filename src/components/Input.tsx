import React from 'react'
import '../styles/Input.scss'

interface IInputProps {
  type: string
  send: (text: string) => void
  cancel: () => void
}

export const Input: React.FC<IInputProps> = ({ type, send, cancel }) => {
  const [text, changeText] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value)
  }

  const handleSend = () => {
    if (acceptSend) {
      send(text)
      changeText('')
      cancel()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (acceptSend) {
        send(text)
        changeText('')
        cancel()
      }
    }
  }

  let acceptSend = text.length > 3
  let maxLength = type === 'post' ? 80 : type === 'name' ? 12 : 0

  return (
    <div className="Input">
      <input
        type="text"
        autoFocus
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        maxLength={maxLength}
        placeholder={
          type === 'post' ? 'Новый пост' : type === 'name' ? 'Новое имя' : ''
        }
        className="Input__input"
      />
      <div className="Input__buttons">
        <button
          onClick={handleSend}
          disabled={!acceptSend}
          className="button button_send"
        >
          {type === 'post' ? 'Добавить пост' : type === 'name' ? 'Сменить' : ''}
        </button>
        <button onClick={cancel} className="button button_cancel">
          Отмена
        </button>
      </div>
    </div>
  )
}
