import { combineReducers } from 'redux'
import weatherData from './get_weather'

const Reducer = combineReducers({
    weather: weatherData,
    
   });

export default Reducer;