import { combineReducers } from "redux";

import { reducerApp } from './AppReducers';
import { reducerLogin } from './LoginReducers';
import { reducerCoOwner } from "./CoOwnerReducer";

export default combineReducers({
  reducerApp,
  reducerLogin,
  reducerCoOwner,
});