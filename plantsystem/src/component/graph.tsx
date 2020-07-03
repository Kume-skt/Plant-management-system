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
            
            <div className="graph">

                <LineChart
                    width={window.innerWidth*0.7}
                    height={300}
                    data={this.state.posts}
                    margin={{
                        top: 5,
                        right: window.innerWidth*0.11,
                        left: 0,
                        bottom: 15
                    }

                    }
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="DATE"
                    />
                    <YAxis
                        orientation="left"
                        yAxisId="leftYAxis"
                        domain={['dataMin', 'dataMax']}
                        ticks={[0, 10, 25, 50, 75, 100]} // Y軸に表示する温度
                        unit="%" // Y軸の単位
                    />
                    {/* <YAxis
                        orientation="right"
                        yAxisId="rightYAxis"
                        domain={['dataMin', 'dataMax']}
                        ticks={[0, 10, 20, 30, 40, 50]} // Y軸に表示する温度
                        unit="°C" // Y軸の単位
                    /> */}
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="soil_value"
                        stroke="#82ca9d"
                        yAxisId='leftYAxis' />
                </LineChart>
            </div>
        )
    }
}