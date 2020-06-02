import React from 'react';
import './App.css';
import Wcv from './component/webCamera_view'
import Wv from './component/Weather_view'
function App() {
  return (
    <div className="App">
      <h1>植物監視</h1>
      <Wcv />
      <Wv />
    </div>
  );
}

export default App;
