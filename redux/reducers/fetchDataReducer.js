import { FETCH_DATA_SUCCESS } from '../actions/fetchDataAction';

const initState = {
  data: {},
};

const fetchDataReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default fetchDataReducer;