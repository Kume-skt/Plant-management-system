import { combineReducers } from 'redux'
import weatherData from './get_weather'
import webCamera from './get_webCamera'
import plantData from './get_plant_Data'
const Reducer = combineReducers({
    webCamera: webCamera,
    weather: weatherData,
    plantD:plantData

});

export default Reducer;