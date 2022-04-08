import { all, takeLatest, call, put } from 'redux-saga/effects'
import { Types } from '../actions/types'

import { getAll } from '../actions/ProfileActions'

import { getDataProfile } from '../../services/profileService'

function* getDataRequest() {
  const response = yield call(getDataProfile);
  console.log(response.data.data)
  yield put(getAll(response.data.data));
}

function* watchRequestGetData() {
  yield  takeLatest(Types.PROFILE_REQUEST_DATA, getDataRequest)
}

function* profileSagas() {
  yield all([ watchRequestGetData() ])
}

export { profileSagas }
