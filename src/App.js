
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signIn} from './actions';


function App() {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedReducer)
  return (
    <div className="App">
      <div><h1>Counter:{counter}</h1></div>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      <button onClick={() => dispatch(signIn())}>Log In</button>
      {loggedIn && <div><h1>Logged In</h1></div>}
    </div>
  );
}

export default App;
