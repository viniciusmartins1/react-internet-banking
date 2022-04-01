import { combineReducers } from "redux";

import { reducerApp } from './AppReducers';
import { reducerLogin } from './LoginReducers';
import { reducerCoOwner } from "./CoOwnerReducer";
import { reducerProfile } from "./ProfileReducer";

export default combineReducers({
  reducerApp,
  reducerLogin,
  reducerCoOwner,
  reducerProfile
});