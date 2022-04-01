import { Types } from '../actions/types'

const initialState = {
  profile: {},
  dataLoad: false
}

export const reducerProfile = (prevState = initialState, action) => {

  switch (action.type) {
    case Types.PROFILE_GET_DATA:
      console.log("entrou");
      return {
        profile: action.payload.profile,
        dataLoad: true
      }
    default:
      return prevState;
  }
}