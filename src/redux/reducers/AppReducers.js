import { Types } from '../actions/types';

const initialState = {
  showLoading: false
}

export const reducerApp = (prevState = initialState, action) => {
  switch (action.type) {
    case Types.APP_SHOW_LOADING:
      return {
        showLoading: true
      }
    case Types.APP_HIDE_LOADING:
      return {
        showLoading: false
      }
    default:
      return prevState;
  }
}