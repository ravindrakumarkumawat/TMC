import React, { createContext, useReducer } from 'react'
import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_UP_USER } from './AuthTypes'
import { reducer } from './AuthReducer'

const initialState = {
  isSignedIn: false,
  user: null
}

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const postSignup = async (newUser) => {
    console.log('postSignup start', newUser)
    dispatch(
      {
        type: SIGN_UP_USER, 
        payload: { ...newUser }
      }
    )
    console.log('postSignup end', newUser)
  }

  const postSigin = async (existingUser) => {
    dispatch({
      type: SIGN_IN_USER,
      payload: { ...existingUser }
    })
  }

  const loggedOut = () => {
    dispatch({ type: SIGN_OUT_USER })
  }

  return <AuthContext.Provider 
            value={{
              isSignedIn: state.isSignedIn,
              user: state.user,
              register: postSignup,
              logIn: postSigin,
              logOut: loggedOut,
            }}>{props.children}</AuthContext.Provider>
}
