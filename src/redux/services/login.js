import { Types } from '../actions/types';

import { all, takeLatest, call, put } from 'redux-saga/effects'
import { loginLogin, loginFailed } from '../actions/LoginActions'
import { requestLogin } from '../../services/loginService'

function* postDataUser({ userName, password }) {
  try {
    const response = yield call(requestLogin, userName, password);
    yield localStorage.setItem('token', response.data.data.token);
    yield put(loginLogin(response.data.data.result));

  } catch (error) {
    yield put(loginFailed(true));
  }

}

function* watchRequestGetUser() {
  yield takeLatest(Types.LOGIN_POST_LOGIN, postDataUser)
}

function* loginSagas(userName) {
  console.log('loginSagas' + userName)
  yield all([watchRequestGetUser()])
}

export { loginSagas }