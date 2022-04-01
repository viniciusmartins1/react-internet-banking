import { Types } from './types'

export const getAll = (profile) => {
  return {
    type: Types.PROFILE_GET_DATA, 
    payload: {
      profile
    }
  }
}

export const requestData = () => {
  return {
    type: Types.PROFILE_REQUEST_DATA,
    payload: null
  }
}