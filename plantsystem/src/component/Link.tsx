import React from 'react';
import { Link } from 'react-router-dom';
// import { css } from "emotion";
import '../page/css/base.css';
export default class Links extends React.Component {
  // nav_css: string;
  constructor(props: any) {
    super(props);
    this.state = {};
    // this.nav_css = css({
    //   textDecoration: "none",
    //   color: "rgb(0, 0, 0)",
    //   fontWeight: "bold",
    //   listStyle: "none",
    //   "@media (max-width: 1000px)": {
    //     display: "inline",
    //     backgroundColor: "red",
    //   },
    // });
  }
  render() {
    return (
      <div id='nav'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/test'>
            <li>植物一覧</li>
          </Link>
          <Link to='/Plant_observation'>
            <li>植物観察</li>
          </Link>
          <Link to='/Plant_graph'>
            <li>植物情報</li>
          </Link>
        </ul>
      </div>
    );
  }
}
