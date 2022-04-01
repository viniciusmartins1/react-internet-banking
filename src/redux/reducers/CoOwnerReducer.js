import { Types } from '../actions/types'
import { listCoOWners } from '../../mocks/listCoOwners'

const initialState = {
  coOwners: [],
  dataLoad: false,
  // coOwners: listCoOWners
}

export const reducerCoOwner = (prevState = initialState, action) => {

  switch (action.type) {
    case Types.CREATE_CO_OWNER:
      return {
        ...prevState,
        coOwners: [action.payload.coOwner, ...prevState.coOwners]
      }
    case Types.CO_OWNER_GET_ALL:
      return {
        ...prevState,
        coOwners: action.payload.coOwners,
        dataLoad: true
      }
    default:
      return prevState;
  }
}