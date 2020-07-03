import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
// import { } from ''

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ColorC from "./Data_processing/ColorChange"

class Graph extends React.Component<any, any> {
    data: { date: string; soil_value: number; banana: number; orange: number; kumeta:number}[];
    test: string[];
    cloor: string[];

    constructor(props: any) {
        super(props);
        this.state = {};
        this.data = [
            { date: '2019-07-01', soil_value: 400, banana: 240, orange: 240, kumeta: 100 },
            { date: '2019-07-02', soil_value: 300, banana: 139, orange: 221, kumeta: 100 },
            { date: '2019-07-03', soil_value: 200, banana: 980, orange: 229, kumeta: 100 },
            { date: '2019-07-04', soil_value: 278, banana: 390, orange: 200, kumeta: 100 },
            { date: '2019-07-05', soil_value: 189, banana: 480, orange: 218, kumeta: 100 },
            { date: '2019-07-06', soil_value: 239, banana: 380, orange: 250, kumeta: 100 },
            { date: '2019-07-07', soil_value: 349, banana: 430, orange: 210, kumeta: 100 },
        ]
        this.test = ["soil_value", "banana", "orange","kumeta"]
        this.cloor = []

    }
    componentWillMount() {
        this.test.map(dataName => (
            this.cloor.push(ColorC().hslToHex(360 * (this.test.lastIndexOf(dataName) + 1) / this.test.length
                , 100, 35))
        ))
    }
    render() {
        console.log(this.cloor);

        return (
            <div className="graph">
                <LineChart
                    width={window.innerWidth * 0.7}
                    height={300}
                    data={this.data}
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
                        dataKey="date"
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
                    {this.test.map(dataName => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        return (<Line
                            type="monotone"
                            dataKey={dataName}
                            stroke={this.cloor[this.test.lastIndexOf(dataName)]}
                            yAxisId='leftYAxis' />
                        )
                    })}
                    {/* <Line
                        type="monotone"
                        dataKey="banana"
                        stroke="rgb(200,100,100)"
                        yAxisId='leftYAxis' /> */}
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