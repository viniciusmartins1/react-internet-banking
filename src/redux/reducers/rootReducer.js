import { combineReducers } from "redux";

import { reducerApp } from './AppReducers';
import { reducerLogin } from './LoginReducers';

export default combineReducers({
  reducerApp,
  reducerLogin
});