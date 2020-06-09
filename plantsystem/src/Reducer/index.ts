import { combineReducers } from 'redux'
import weatherData from './get_weather'
import webCamera from './get_webCamera'

const Reducer = combineReducers({
    webCamera: webCamera,
    weather: weatherData,
});

export default Reducer;