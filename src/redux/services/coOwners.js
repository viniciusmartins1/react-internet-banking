import { Types } from '../actions/types';

import { all, takeLatest, call, put } from 'redux-saga/effects'
import { api } from "../../services";
import { getAll } from '../actions/CoOwnersActions'

function* getListRequested() {
  const response = yield call(api, 'coOwners');
  yield put(getAll(response.data));
}

function* watchRequestGetList() {
  yield takeLatest(Types.CO_OWNER_REQUEST_ALL, getListRequested)
}

function* coOwnersSagas() {
  yield all([ watchRequestGetList() ])
}

export { coOwnersSagas }