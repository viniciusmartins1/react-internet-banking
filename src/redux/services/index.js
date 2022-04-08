import { all } from 'redux-saga/effects'

import { coOwnersSagas } from "./coOwners";
import { profileSagas } from "./profile";
import { loginSagas } from './login';


function* sagas() {
  yield all([
    coOwnersSagas(),
    profileSagas(),
    loginSagas()
  ])
}

export { sagas }