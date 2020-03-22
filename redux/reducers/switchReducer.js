import { SWITCH } from '../actions/switchAction';

const initState = true;

const switchReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH:
      return !state;
    default:
      return state;
  }
}

export default switchReducer;
