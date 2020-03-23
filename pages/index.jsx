import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';
import { getData } from '../redux/actions/fetchDataAction';
import { getIp } from '../redux/actions/fetchIpAction';
import { changeSwitch } from '../redux/actions/switchAction';

const App = () => {
  const counter = useSelector(state => state.counter.value);
  const switchLight = useSelector(state => state.switchLight);
  const fetchData = useSelector(state => state.fetchData.data);
  const fetchIp = useSelector(state => state.fetchIp.data);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementCounter())}>Increment</button>
      <button onClick={() => dispatch(incrementCounter())}>Decrement</button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(changeSwitch())}>{switchLight ? 'open' : 'false'}</button>

      <br/>

      <button onClick={() => dispatch(getData())}>getData</button>
      {Object.keys(fetchData).length > 0 ? JSON.stringify(fetchData) : ''}

      <br/>

      <button onClick={() => dispatch(getIp())}>getIp</button>
      {Object.keys(fetchIp).length > 0 ? JSON.stringify(fetchIp) : ''}
    </div>
  );
};

export default App;
