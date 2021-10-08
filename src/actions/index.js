import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import user from './user';

axios.defaults.baseURL = 'http://localhost:5000';

export default function* rootSaga() {
  yield all([
    fork(user),
  ])
}