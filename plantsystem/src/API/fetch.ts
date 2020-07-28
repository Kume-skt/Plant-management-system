import { webCamera, Weather,Plant_Data, Plant_Mqtt } from '../Action'
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
    function get_PlantMqtt(dispatch: any) {
        fetch("http://localhost:5000/plant_Mqtt")
            .then(data => data.json())
            .then(data => dispatch(Plant_Mqtt(data))
        )
    }
    return {
        get_webCamera,
        get_Weather,
        get_PlantData,
        get_PlantMqtt
    }
}

export default reData;
