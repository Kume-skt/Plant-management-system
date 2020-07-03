import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Link from './component/Link'
import Plant_observation from './page/plant_observation'
import Plant_graph from './page/plant_graph'

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Link />
          <Route exact path='/' component={()=>{return <h1>start</h1>}} />
          <Route path='/Plant_observation' component={Plant_observation} />
          <Route path='/Plant_graph' component={Plant_graph} />
        </div>
      </Router>
    </div>
  );
}

export default App;
