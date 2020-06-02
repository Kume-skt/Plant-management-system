import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../Reducer/fetch'

class webCamera_view extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.get_webCamera()
    }
    render() {
        console.log("log",this.props);
        
        return (
            <img src={this.props.weather} />
        )
    }
}
function mapStateToProps(state: any) {
    return state;
}
function mapDispatchToProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    return { get_webCamera: () => { getData().get_weather(dispatch); } };
}
export default connect(mapStateToProps, mapDispatchToProps)(webCamera_view)