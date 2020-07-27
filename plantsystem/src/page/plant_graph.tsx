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
            <Graph plant_Data={this.props.plantD} leftGraph_DataName={[]} rightGraph_DataName={[]} />
        )
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