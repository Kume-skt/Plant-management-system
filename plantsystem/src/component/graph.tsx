import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Graph extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <p>Graph</p>
        )
    }
}