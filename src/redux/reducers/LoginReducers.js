import { Types } from '../actions/types';


const initialState = {
  user: {},
  userSaved: false,
  forgotPass: false,
  isAuthenticated: false
}

export const reducerLogin = (prevState = initialState, action) => {


  switch (action.type) {
    case Types.LOGIN_DO_LOGIN:
      return {
        ...prevState,
        user: action.payload.user,
        userSaved: true,
        isAuthenticated: true,
      }
    case Types.LOGIN_DO_FORGOT_PASS:
      return {
        ...prevState,
        userSaved: false,
        forgotPass: action.payload.status,
      }
    case Types.LOGOUT:
      return {
        ...prevState,
        userSaved: false,
        user: {},
        isAuthenticated: false,
      }
    default:
      return prevState;
  }
}