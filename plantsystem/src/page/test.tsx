import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch'

class Test extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
      this.state = {};

   }
   componentWillMount() {
      this.props.dispatch1();
   }
   render() {
      console.log("test");
      const plant_Data = Object.values(this.props.plantD).map((d: any) => { return d })

      return (
         <p>redux_classType</p>
      )
   }
}
function mapStateToProps(state: any) {
   return state;
}
function mapDispatchToProps() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch();
   return { dispatch1: () => { getData().get_PlantData(dispatch); } };
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)