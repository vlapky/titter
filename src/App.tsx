import React from 'react'
import './styles/App.scss'
import { SignIn } from './containters/SignIn'
import { Feed } from './containters/Feed'
import { Profile } from './containters/Profile'
import { Subs } from './containters/Subs'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IState } from './interfaces/IState'

const App: React.FC = () => {
  const loginUser = useSelector((state: IState) => state.login)
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignIn}>
            {loginUser && <Redirect to="/feed" />}
          </Route>
          {!loginUser && <Redirect to="/login" />}
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/:id" component={Profile} />
          <Route exact path="/:id/:subs" component={Subs} />
          <Route exact path="/:curId/:subs/:id" component={Profile} />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
