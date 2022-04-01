import { all, takeLatest, call, put } from 'redux-saga/effects'
import { Types } from '../actions/types'

import { getAll } from '../actions/ProfileActions'

import { api } from '../../services'

function* getDataRequest() {
  const response = yield call(api, "profile");
  yield put(getAll(response.data));
}

function* watchRequestGetData() {
  yield  takeLatest(Types.PROFILE_REQUEST_DATA, getDataRequest)
}

function* profileSagas() {
  yield all([ watchRequestGetData() ])
}

export { profileSagas }
