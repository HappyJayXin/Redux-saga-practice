import counterReducer from './counterReducer';
import switchReducer from './switchReducer';
import fetchDataReducer from './fetchDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    switchLight: switchReducer,
    fetchData: fetchDataReducer
});

export default rootReducer;
