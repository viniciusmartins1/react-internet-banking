import { Types } from '../actions/types';


const initialState = {
  user: {},
  userSaved: false,
  forgotPass: false,
}

export const reducerLogin = (prevState = initialState, action) => {


  switch (action.type) {
    case Types.LOGIN_DO_LOGIN:
      return {
        ...prevState,
        user: action.payload.user,
        userSaved: true,
      }
    case Types.LOGIN_DO_FORGOT_PASS:
      return {
        ...prevState,
        userSaved: false,
        forgotPass: action.payload.status,
      }
    default:
      return prevState;
  }
}