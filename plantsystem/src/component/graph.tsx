import React, { PureComponent } from 'react';

interface get_data {
    plant_Data: any,
    leftGraph_DataName: string[],
    rightGraph_DataName: string[],
}

export default class Graph extends React.Component<get_data, any>  {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    // データを親から取得
    componentWillReceiveProps(nextpro: any) {
        Object.keys(nextpro).map(data => {
            this.setState({ ...this.state, [data]: nextpro[data] })
        }
        );
    }
    render() {
        console.log(this.state);

        return (
            <p> Graph</p >
        )
    }
}