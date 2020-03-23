import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_IP, FETCH_IP_SUCCESS } from '../actions/fetchIpAction';

function* fetchIp() {
  const data = yield call(
    () => fetch('https://httpbin.org/ip')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_IP_SUCCESS, payload: { data } });
}

export default function* fetchIpSaga() {
  yield takeEvery(FETCH_IP, fetchIp);
}