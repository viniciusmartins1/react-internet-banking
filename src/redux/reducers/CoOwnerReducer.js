import { Types } from '../actions/types'
import { listCoOWners } from '../../mocks/listCoOwners'

const initialState = {
  coOwners: listCoOWners
}

export const reducerCoOwner = (prevState = initialState, action) => {

  switch (action.type) {
    case Types.CREATE_CO_OWNER:
      return {
        ...prevState,
        coOwners: [action.payload.coOwner, ...prevState.coOwners]
      }
    default:
      return prevState;
  }
}