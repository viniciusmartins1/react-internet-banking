import { Types } from './types'

export const loginForgotPass = (status) => {

  return {
    type: Types.LOGIN_DO_FORGOT_PASS,
    payload: {
      status
    }
  }
}

export const loginLogin = (user) => {
  return {
    type: Types.LOGIN_DO_LOGIN,
    payload: {
      user
    }
  }
}

export const loginFailed = (failed) => {
  return {
    type: Types.LOGIN_FAILED,
    payload: {
      failed
    }
  }
}

export const loginSuccess = (success) => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: {
      success
    }
  }
}

export const postLogin = (userName, password) => {
  console.log('reducerPostLogin ' + userName)
  return {
    type: Types.LOGIN_POST_LOGIN,
    userName,
    password
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

