import counterReducer from './counterReducer';
import switchReducer from './switchReducer';
import fetchDataReducer from './fetchDataReducer';
import fetchIpReducer from './fetchIpReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    switchLight: switchReducer,
    fetchData: fetchDataReducer,
    fetchIp: fetchIpReducer
});

export default rootReducer;
