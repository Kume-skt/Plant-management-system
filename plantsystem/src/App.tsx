import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Link from './component/Link';
import Plant_observation from './page/plant_observation';
import Plant_graph from './page/plant_graph';
import Testpage from './page/test';
// import { css } from "emotion";
// const base_css = css({
//   fontSize: "1.3em",
//   textAlign:"center",
//   "@media (max-width: 1000px)": {
//     display: 'inline',
//     backgroundColor: "red",
//   },
//   h1: { fontSize: "3em" },
// });
function App() {
  console.log(process.env);

  return (
    <div className='App'>
      <Router>
        <div className='home'>
          <Link />
          <Route
            exact
            path='/'
            component={() => {
              return <h1>plant management</h1>;
            }}
          />
          <Route path='/test' component={Testpage} />
          <Route path='/Plant_observation' component={Plant_observation} />
          <Route path='/Plant_graph' component={Plant_graph} />
        </div>
      </Router>
    </div>
  );
}

export default App;
