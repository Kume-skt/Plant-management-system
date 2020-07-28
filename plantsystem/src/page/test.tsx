import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch'
import { setInterval } from 'timers';

class plantMqtt extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
      this.state = {};
   }
   componentWillMount() {
      console.log("afdafa");

      this.props.get_plantMqtt();

   }
   componentDidMount() {
      console.log("didi");

      setInterval(() => {
         this.setState(this.props.plantM);
      }, 1000);
   }
   render() {
      return (
         <div>
            <h3>温度{this.state.Temperature}</h3>
            <h3>湿度{this.state.humidity}</h3>
            <h3>体感温度{this.state.HeatIndex}</h3>
            <h3>土中水分{this.state.soil_value}</h3>
            <h3>水位{this.state.water}</h3>
            <h3>水質{this.state.tds}</h3>
         </div>
      )
   }
}
function mapStateToProps(state: any) {
   return state;
}
function mapDispatchToProps() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch();
   return { get_plantMqtt: () => { getData().get_PlantMqtt(dispatch); } };
}
export default connect(mapStateToProps, mapDispatchToProps)(plantMqtt)