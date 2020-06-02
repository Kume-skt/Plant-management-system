import { Weather } from '../Action'
const reData = () => {
    function get_weather(dispatch: any) {
        fetch("http://localhost:5000").then(data => dispatch(Weather(data.url)))
    }
    return {
        get_weather,
    }
}

export default reData;
