import { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useLocation, useHistory } from "react-router-dom";
import { AuthContext } from '../Context/Authentication/AuthProvider'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {isSignedIn} = useContext(AuthContext)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    console.log('current path', history, location, location.pathname)
  })
  return (
    <Route
      render={props =>
        isSignedIn ? <Component {...props} /> : <Redirect to={{ pathname: "/signin", state: { from : props.location}}} />
      }
      {...rest}
    exact />
  )
}

export default ProtectedRoute
