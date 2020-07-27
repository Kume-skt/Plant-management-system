import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
// import { } from ''

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ColorC from "./Data_processing/ColorChange"

class Graph extends React.Component<any, any> {
    test: string[];
    cloor: string[];
    testkey: string[];

    constructor(props: any) {
        super(props);
        this.state = {};

        this.test = ["soil_value", "humidity","Temperature","HeatIndex"]
        this.testkey = ["water"]
        // "water"
        this.cloor = []

    }
    componentWillMount() {
        this.test.concat(this.testkey).map(dataName => (
            this.cloor.push(ColorC().hslToHex(360 * (this.test.concat(this.testkey).lastIndexOf(dataName) + 1) / this.test.concat(this.testkey).length
                , 100, 35))
        ))
    }
    render() {      
        return (
            <div className="graph">
                <LineChart
                    width={window.innerWidth * 0.7}
                    height={300}
                    data={this.props.plantD}
                    margin={{
                        top: 5,
                        right: window.innerWidth * 0.11,
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
                    <YAxis
                        orientation="right"
                        yAxisId="rightYAxis"
                        domain={['dataMin', 'dataMax']}
                        ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} // Y軸に表示する温度
                        unit="cm" // Y軸の単位
                    />
                    <Tooltip />
                    <Legend />
                    {this.test.map(dataName => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        return (<Line
                            type="monotone"
                            dataKey={dataName}
                            stroke={this.cloor[this.test.concat(this.testkey).lastIndexOf(dataName)]}
                            yAxisId='leftYAxis' />
                        )
                    })}
                    {this.testkey.map(dataName => {
                        return (
                            <Line
                                type="monotone"
                                dataKey={dataName}
                                stroke={this.cloor[this.test.concat(this.testkey).lastIndexOf(dataName)]}
                                yAxisId='rightYAxis' />

                        )
                    })}
                </LineChart>
            </div>
        )
    }

    
}
function mapStateToProps(state: any) {
    return state;
}
// function mapDispatchToProps() {
// // eslint-disable-next-line react-hooks/rules-of-hooks
//    const dispatch = useDispatch();
//    return { dispatch1: () => { dispatch(); } };
// }
export default connect(mapStateToProps)(Graph)