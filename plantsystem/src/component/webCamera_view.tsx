import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch';

class webCamera_view extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.get_webCamera();
  }
  render() {
    return <img width='400px' height='300px' src={this.props.webCamera} />;
  }
}
function mapStateToProps(state: any) {
  return state;
}
function mapDispatchToProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  return {
    get_webCamera: () => {
      getData().get_webCamera(dispatch);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(webCamera_view);
