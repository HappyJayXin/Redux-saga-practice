import { FETCH_IP_SUCCESS } from '../actions/fetchIpAction';

const initState = {
  data: {},
};

const fetchIpReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_IP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default fetchIpReducer;