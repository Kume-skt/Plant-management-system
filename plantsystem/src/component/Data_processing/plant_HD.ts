interface plant_data {
    RH: number, //湿度
    t: number    //温度
}


const plant_hd = () => {
    // 飽差 
    function hd(params: plant_data) {
        console.log(params);
        
        return (100 - params.RH) * at(params) / 100
    }
    // 絶対湿度
    function vh(params: plant_data) {
        return at(params) * (params.RH/100)
    }
    // 相対湿度％
    function RH(params: plant_data) {
        return (vh(params) / at(params)) * 100
    }
    // 飽和水蒸気量
    function at(params: plant_data) {
        return 217 * et(params) / (params.t + 237.15)
    }
    // 飽和水蒸気圧
    function et(params: plant_data) {
        return 6.11 * Math.pow(10, ((7.5 * params.t) / (params.t + 237.3)));

    }
    return {
        HD: hd,
        VH: vh,
        AT: at,
        ET: et,
    }
}

export default plant_hd;