import { Types } from '../actions/types'
import { listCoOWners } from '../../mocks/listCoOwners'

const initialState = {
  coOwners: [],
  newSuccess: false,
  newFailed: false,
}

export const reducerCoOwner = (prevState = initialState, action) => {

  switch (action.type) {
    case Types.CO_OWNER_NEW_SUCCESS:
      return {
        ...prevState,
        newSuccess: action.payload.success
      }
    case Types.CO_OWNER_NEW_FAILED: 
      return {
        ...prevState,
        newFailed: action.payload.failed
      }
    case Types.CO_OWNER_GET_ALL:
      return {
        ...prevState,
        coOwners: action.payload.coOwners,
      }
    default:
      return prevState;
  }
}