export const Weather = (WeatherData: any) => {
    return {
        type: 'Weather',
        Data: WeatherData
    };
};
export const webCamera = (webCameraURL: String) => {
    return {
        type: 'webCamera',
        Data: webCameraURL
    };
};
export const Plant_Data = (PlantData: any) => {
    return {
        type: 'plantData',
        Data: PlantData
    };
};
export const Plant_Mqtt = (PlantMqtt: any) => {
    return {
        type: 'plantMqtt',
        Data: PlantMqtt
    };
};