import React from 'react'
import './styles/App.scss'
import { SignIn } from './containters/SignIn'
import { Feed } from './containters/Feed'
import { Profile } from './containters/Profile'
import { Subs } from './containters/Subs'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { IState } from './redux/mainReducer'

const App: React.FC = () => {
  const loginUser = useSelector((state: IState) => state.users.currentUser)

  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignIn}>
            {loginUser && <Redirect to="/feed" />}
          </Route>
          {!loginUser && <Redirect to="/login" />}
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/subs" component={Subs} />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
