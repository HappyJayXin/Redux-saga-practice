import { all } from 'redux-saga/effects';
import fetchDataSaga from './fetchDataSaga';

function* rootSaga() {
  yield all([
    fetchDataSaga()
  ]);
}

export default rootSaga;
