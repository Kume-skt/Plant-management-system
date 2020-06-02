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