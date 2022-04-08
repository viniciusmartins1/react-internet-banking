import { Types } from '../actions/types'

const initialState = {
  profile: {},
}

export const reducerProfile = (prevState = initialState, action) => {

  switch (action.type) {
    case Types.PROFILE_GET_DATA:
      return {
        profile: action.payload.profile,
        dataLoad: true
      }
    default:
      return prevState;
  }
}