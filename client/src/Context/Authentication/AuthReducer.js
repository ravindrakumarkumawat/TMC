import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_UP_USER } from './AuthTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_USER: 
      return {
        ...state,
        user: {...action.payload },
        isSignedIn: true
      }
    case SIGN_UP_USER: 
      return {
        ...state,
        isSignedIn: false,
        user: null
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        isSignedIn: false,
        user: null
      }
    default:
      return state
  }
}