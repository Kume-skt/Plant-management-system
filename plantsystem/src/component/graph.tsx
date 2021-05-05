import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import ColorC from './Data_processing/ColorChange';

interface get_data {
  plant_Data: any;
  leftGraph_DataName: string[];
  rightGraph_DataName: string[];
  left_Scale: number[];
  right_Scale: number[];
  left_unit: string;
  right_unit: string;
  width: number;
}

export default class Graph extends React.Component<get_data, any> {
  graph_DataName_List: string[];
  color: string[];
  constructor(props: any) {
    super(props);
    this.state = {};

    this.color = [];
    this.graph_DataName_List = [];
  }
  // データを親から取得
  componentWillReceiveProps(nextpro: any) {
    Object.keys(nextpro).map((data) => {
      this.setState({ ...this.state, [data]: nextpro[data] });
    });
  }
  componentDidUpdate() {
    console.log('yobaareta');
    console.log(this.state);
    this.graph_DataName_List = this.props.leftGraph_DataName.concat(
      this.props.rightGraph_DataName
    );

    this.graph_DataName_List.map((dataName: string) =>
      this.color.push(
        ColorC().hslToHex(
          (360 * (this.graph_DataName_List.lastIndexOf(dataName) + 1)) /
            this.graph_DataName_List.length,
          100,
          35
        )
      )
    );
  }
  // componentDidMount() {
  //     setInterval(this.tets,1000);
  // }
  // tets() {
  //         console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  // }
  render() {
    if (this.graph_DataName_List.length == 0) {
      return <p>お待ち</p>;
    } else {
      return (
        <div className='graph'>
          <LineChart
            width={this.props.width}
            height={300}
            data={this.props.plant_Data}
            margin={{
              top: 5,
              right: 50,
              left: 0,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='DATE' />
            <YAxis
              orientation='left'
              yAxisId='leftYAxis'
              domain={['dataMin', 'dataMax']}
              ticks={this.props.left_Scale} // Y軸に表示する温度
              unit={this.props.left_unit} // Y軸の単位
            />
            <YAxis
              orientation='right'
              yAxisId='rightYAxis'
              domain={['dataMin', 'dataMax']}
              ticks={this.props.right_Scale} // Y軸に表示する温度
              unit={this.props.right_unit} // Y軸の単位
            />
            <Tooltip />
            <Legend />
            {this.props.leftGraph_DataName.map((dataName: string) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              return (
                <Line
                  type='monotone'
                  dataKey={dataName}
                  stroke={
                    this.color[this.graph_DataName_List.lastIndexOf(dataName)]
                  }
                  yAxisId='leftYAxis'
                />
              );
            })}
            {this.props.rightGraph_DataName.map((dataName: string) => {
              return (
                <Line
                  type='monotone'
                  dataKey={dataName}
                  stroke={
                    this.color[this.graph_DataName_List.lastIndexOf(dataName)]
                  }
                  yAxisId='rightYAxis'
                />
              );
            })}
          </LineChart>
        </div>
      );
    }
  }
}
