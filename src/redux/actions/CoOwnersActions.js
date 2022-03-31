import { Types } from './types'

export const createCoOwner = (coOwner) => {

  return {
    type: Types.CREATE_CO_OWNER,
    payload: {
      coOwner
    }
  }
}