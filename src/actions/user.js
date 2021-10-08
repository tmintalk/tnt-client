import { put, takeEvery, all, fork, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from '../reducers/user';

function loginAPI(loginData) {
  return axios.post('/auth/login', loginData);
}

function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    // yield put({
    //   type: LOG_IN_SUCCESS,
    //   data: result.data
    // })
    delay(100);
    yield put({
      type: LOG_IN_SUCCESS,
      data: {
        name: 'tnt',
        nickname: 'tnt'
      }
    })

  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ])
}