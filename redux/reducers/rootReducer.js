import counterReducer from './counterReducer';
import switchReducer from './switchReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    switchLight: switchReducer
});

export default rootReducer;
