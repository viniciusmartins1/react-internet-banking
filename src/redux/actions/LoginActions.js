import { Types } from './types'

export const loginForgotPass = (status) => {

  return {
    type: Types.LOGIN_DO_FORGOT_PASS,
    payload: {
      status
    }
  }
}

export const loginLogin = (userName, password) => {
  return {
    type: Types.LOGIN_DO_LOGIN,
    payload: {
      user: { userName, password }
    }
  }
}

export const logout = (status) => {
  return {
    type: Types.LOGOUT,
    payload: {
      status
    }
  }
}

