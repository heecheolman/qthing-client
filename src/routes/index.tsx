import React from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Menu1 from '../pages/Menu1'
import Menu2 from '../pages/Menu2'

export const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb: any) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <AuthRoute exact path="/">
        <Home />
      </AuthRoute>
      <AuthRoute exact path="/menu1">
        <Menu1 />
      </AuthRoute>
      <AuthRoute exact path="/menu2">
        <Menu2 />
      </AuthRoute>
    </Switch>
  )
}

export default MainRouter
