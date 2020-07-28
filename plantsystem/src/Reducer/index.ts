import { combineReducers } from 'redux'
import weatherData from './get_weather'
import webCamera from './get_webCamera'
import plantData from './get_plant_Data'
import plantMqtt from './get_plant_Mqtt'
const Reducer = combineReducers({
    webCamera: webCamera,
    weather: weatherData,
    plantD: plantData,
    plantM:plantMqtt

});

export default Reducer;