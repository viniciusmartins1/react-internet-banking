import { all } from 'redux-saga/effects'

import { coOwnersSagas } from "./coOwners";
import { profileSagas } from "./profile"


function* sagas() {
  yield all([
    coOwnersSagas(),
    profileSagas()
  ])
}

export { sagas }