import { webCamera, Weather } from '../Action'
const reData = () => {
    function get_webCamera(dispatch: any) {
        fetch("http://localhost:5000")
            .then(data => dispatch(webCamera(data.url)))
    }
    function get_Weather(dispatch: any) {
        fetch("http://localhost:5000/Weather")
            .then(data => data.json())
            .then(data => dispatch(Weather(data))
        )
    }
    return {
        get_webCamera,
        get_Weather
    }
}

export default reData;
