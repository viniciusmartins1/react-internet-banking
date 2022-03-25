import { Types } from './types'


export const showLoading = () => {
  return {
    type: Types.APP_SHOW_LOADING
  }
}

export const hideLoading = () => {
  return {
    type: Types.APP_HIDE_LOADING
  }
}