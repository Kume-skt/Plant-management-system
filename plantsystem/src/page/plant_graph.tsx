import React from 'react'
import Graph from '../component/graph'
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch'


class classname extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.get_plantData();
    }

    render() {
        return (
            <div>
                <Graph plant_Data={this.props.plantD}
                    leftGraph_DataName={["soil_value", "humidity"]}
                    rightGraph_DataName={[]}
                    left_Scale={[0, 20, 40, 60, 80, 100]}
                    right_Scale={[]}
                    left_unit="%"
                    right_unit=""
                />
                <Graph plant_Data={this.props.plantD}
                    leftGraph_DataName={["water"]}
                    rightGraph_DataName={["Temperature","HeatIndex"]}
                    left_Scale={[0, 2, 4, 6, 8, 10]}
                    right_Scale={[0, 10, 20, 30,40]}
                    left_unit="cm"
                    right_unit="℃"
                />
            </div>)
    }
}
function mapStateToProps(state: any) {
    return state;
}
function mapDispatchToProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    return { get_plantData: () => { getData().get_PlantData(dispatch); } };
}
export default connect(mapStateToProps, mapDispatchToProps)(classname)