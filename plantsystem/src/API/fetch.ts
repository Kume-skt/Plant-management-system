import { webCamera, Weather,Plant_Data } from '../Action'
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
    function get_PlantData(dispatch: any) {
        fetch("http://localhost:5000/plant_getData")
            .then(data => data.json())
            .then(data => dispatch(Plant_Data(data))
        )
    }
    return {
        get_webCamera,
        get_Weather,
        get_PlantData
    }
}

export default reData;
