import { Types } from '../actions/types';

import { all, takeLatest, call, put } from 'redux-saga/effects'
import { getList, postNew } from '../../services/coOwnersService'
import { getAll, newCoOwnerSuccess, newCoOwnerFailed } from '../actions/CoOwnersActions'

function* getListRequested() {
  const response = yield call(getList);
  yield put(getAll(response.data.data.coTitulares));
}

function* watchRequestGetList() {
  yield takeLatest(Types.CO_OWNER_REQUEST_ALL, getListRequested)
}

function* postNewCoOwner({ coOwner }) {
  try {
    yield call(postNew, coOwner);
    yield put(newCoOwnerSuccess(true));
    
  } catch (error) {
    yield put(newCoOwnerFailed(true));
  }
}

function* watchRequestPost() {
  yield takeLatest(Types.CO_OWNER_POST, postNewCoOwner)
}

function* coOwnersSagas() {
  yield all([
    watchRequestGetList(),
    watchRequestPost()
  ])
}

export { coOwnersSagas }