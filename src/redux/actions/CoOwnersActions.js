import { Types } from './types'

export const newCoOwnerSuccess = (success) => {
  return {
    type: Types.CO_OWNER_NEW_SUCCESS,
    payload: {
      success
    }
  }
}

export const newCoOwnerFailed = (failed) => {
  return {
    type: Types.CO_OWNER_NEW_FAILED,
    payload: {
      failed
    }
  }
}

export const postCoOwner = (coOwner) => {
  return {
    type: Types.CO_OWNER_POST,
    coOwner,
  }
}

export const getAll = (coOwners) => {
  return {
    type: Types.CO_OWNER_GET_ALL,
    payload: {
      coOwners
    }
  }
}

export const requestGetAll = () => {

  return {
    type: Types.CO_OWNER_REQUEST_ALL,
    payload: null
  }
}