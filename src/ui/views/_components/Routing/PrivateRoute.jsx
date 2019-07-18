import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { routes } from 'ui/routes'
import { userStorage } from 'core/domain/model/User/UserStorage'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        userStorage.hasToken() ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
