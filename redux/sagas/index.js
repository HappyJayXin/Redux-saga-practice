import { all } from 'redux-saga/effects';
import fetchDataSaga from './fetchDataSaga';
import fetchIpSaga from './fetchIpSaga';

function* rootSaga() {
  yield all([
    fetchDataSaga(),
    fetchIpSaga()
  ]);
}

export default rootSaga;
