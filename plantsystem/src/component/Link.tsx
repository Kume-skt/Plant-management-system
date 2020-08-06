import React from 'react';
import { Link } from 'react-router-dom'

import '../page/css/base.css'
export default class Links extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id ="nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    {/* <Link to="/test"><li>テストページ</li></Link> */}
                    {/* <Link to="/Plant_observation"><li>植物観察</li></Link> */}
                    <Link to="/Plant_graph"><li>植物情報</li></Link>
                </ul>

            </div>
        )
    }
}