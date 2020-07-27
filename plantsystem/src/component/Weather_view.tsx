import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//処理に関するimportをしてください(Action:dispatchです)
import getData from '../API/fetch'
import './weather.css'

class Weather_view extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.get_WeatherData();
    }
    render() {
        return (
            <div className="Weather">
              <p>  <img src={this.props.weather.img} />
                    <p className="ond_max"><b>{"最高"+this.props.weather.high}</b></p>
                    　<p className="ond_min">
                        <b>{"最低"+this.props.weather.low}</b>
                    </p>
                </p>
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
    return { get_WeatherData: () => { getData().get_Weather(dispatch); } };
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather_view)