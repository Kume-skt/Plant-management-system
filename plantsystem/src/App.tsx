import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
//処理に関するimportをしてください(Action)
function App() {
  const Data = useSelector((state:any) => state.weather);
  const dispatch = useDispatch();
  console.log(Data);
  
  return (
    <div className="App">
      <h1>{Data}</h1>
    </div>
  );
}

export default App;
