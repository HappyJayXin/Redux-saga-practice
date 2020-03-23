import { put, takeEvery, delay, call } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../actions/fetchDataAction';

function* fetchData() {
  yield delay(1000);
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

export default function* fetchDataSaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}