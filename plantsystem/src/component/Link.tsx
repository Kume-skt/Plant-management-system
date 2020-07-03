import React from 'react';
import { Link } from 'react-router-dom'
export default class Links extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/Plant_observation">植物観察</Link>
                <Link to="/Plant_graph">植物情報</Link>
            </div>
        )
    }
}