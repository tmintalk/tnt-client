import { put, takeEvery, all, fork, delay } from 'redux-saga/effects';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from '../reducers/user';

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