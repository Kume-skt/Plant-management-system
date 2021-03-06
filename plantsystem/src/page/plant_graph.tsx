import React from 'react';

import { useSelector, useDispatch, connect } from 'react-redux';
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch';

import Graph from '../component/graph';
import Table from '../component/dataTable';

import Plant_HD from '../component/Data_processing/plant_HD';

import '../page/css/plant_graph.css';

class classname extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.get_plantData();
  }

  render() {
    const plant_hd = Object.values(this.props.plantD).map((Data: any) => {
      return Plant_HD().HDTA({
        DATE: Data['DATE'],
        RH: Data['humidity'],
        t: Data['Temperature'],
      });
    });

    return (
      <div className='plant'>
        <div className='plant_graph'>
          <Graph
            plant_Data={this.props.plantD}
            leftGraph_DataName={['soil_value', 'humidity']}
            rightGraph_DataName={[]}
            left_Scale={[0, 20, 40, 60, 80, 100]}
            right_Scale={[]}
            left_unit='%'
            right_unit=''
            width={1010}
          />
          <Graph
            plant_Data={plant_hd}
            leftGraph_DataName={['max_hd', 'min_hd', 'real_hd']}
            rightGraph_DataName={[]}
            left_Scale={[0, 5, 10, 15, 20]}
            right_Scale={[]}
            left_unit='g/m3'
            right_unit=''
            width={500}
          />
          <Graph
            plant_Data={this.props.plantD}
            leftGraph_DataName={['water']}
            rightGraph_DataName={['Temperature', 'HeatIndex']}
            left_Scale={[0, 2, 4, 6, 8, 10]}
            right_Scale={[0, 10, 20, 30, 40]}
            left_unit='cm'
            right_unit='℃'
            width={500}
          />
        </div>
        <div className='plant_table'>
          <Table
            plant_Data={this.props.plantD}
            // plant_tableNameList={Object.keys(this.props.plantD[1])}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  return state;
}
function mapDispatchToProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  return {
    get_plantData: () => {
      getData().get_PlantData(dispatch);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(classname);
