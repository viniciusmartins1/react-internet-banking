import { Types } from './types'

export const createCoOwner = (coOwner) => {
  return {
    type: Types.CREATE_CO_OWNER,
    payload: {
      coOwner
    }
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