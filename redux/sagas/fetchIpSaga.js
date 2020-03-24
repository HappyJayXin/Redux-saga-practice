import { put, call, take, fork, select } from 'redux-saga/effects';
import { FETCH_IP, FETCH_IP_SUCCESS } from '../actions/fetchIpAction';
import { FETCH_DATA_SUCCESS } from '../actions/fetchDataAction';

export const getData = state => state.fetchData;

function* fetchIp(res) {
  const { data } = yield select(getData);
  console.log(res === data);
  const ip = yield call(
    () => fetch('https://httpbin.org/ip')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_IP_SUCCESS, payload: { data: ip } });
}

export default function* fetchIpSaga() {
  while (true) {
    const {payload: { data }} = yield take(FETCH_DATA_SUCCESS);
    // yield fork(FETCH_IP, fetchIp);
    yield fork(fetchIp, data);
  }
}