import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
//処理に関するimportをしてください(Action)
import { Weather } from './Action';
import getData from './Reducer/fetch'
function App() {
  const Data = useSelector((state: any) => state.weather);
  const dispatch = useDispatch();
  getData().get_weather(dispatch);
  
  return (
    <div className="App">
      <img src={Data} />
    </div>
  );
}

export default App;
