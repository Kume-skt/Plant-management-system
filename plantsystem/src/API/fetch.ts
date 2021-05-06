import { config } from './config';
import { webCamera, Weather, Plant_Data, Plant_Mqtt } from '../store/Action';
const reData = () => {
  const ip_Address: string = `http://${config.apiIp}`;
  function get_webCamera(dispatch: any) {
    fetch(ip_Address).then((data) => dispatch(webCamera(data.url)));
  }
  function get_Weather(dispatch: any) {
    fetch(`${ip_Address}/Weather`)
      .then((data) => data.json())
      .then((data) => dispatch(Weather(data)));
  }
  function get_PlantData(dispatch: any) {
    fetch(`${ip_Address}/plant_getData`)
      .then((data) => data.json())
      .then((data) => dispatch(Plant_Data(data)));
  }
  function get_PlantMqtt(dispatch: any) {
    fetch(`${ip_Address}/plant_Mqtt`)
      .then((data) => data.json())
      .then((data) => dispatch(Plant_Mqtt(data)));
  }
  return {
    get_webCamera,
    get_Weather,
    get_PlantData,
    get_PlantMqtt,
  };
};

export default reData;
