interface plant_data {
    RH: number, //湿度
    t: number,    //温度
    DATE: string
}


const plant_hd = () => {
    // 飽差 
    function hd(params: plant_data) {
        console.log(params);
        console.log(vh(params));

        // return (100 - params.RH) * at(params) / 100
        return at(params) - vh(params)
    }
    // 絶対湿度
    function vh(params: plant_data) {
        return at(params) * (params.RH / 100)
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
        return 6.1 * Math.pow(10, ((7.5 * params.t) / (params.t + 237.3)));
    }

    function HD_table(params: plant_data) {
        switch (params.t) {
            case 8:
                return { DATE: params.DATE, max_hd: 5.0, min_hd: 3.3, real_hd: hd(params) };
            case 9:
                return { DATE: params.DATE, max_hd: 5.3, min_hd: 3.1, real_hd: hd(params) };
            case 10:
                return { DATE: params.DATE, max_hd: 5.6, min_hd: 3.3, real_hd: hd(params) };
            case 11:
                return { DATE: params.DATE, max_hd: 6.0, min_hd: 3.0, real_hd: hd(params) };
            case 12:
                return { DATE: params.DATE, max_hd: 6.4, min_hd: 3.2, real_hd: hd(params) };
            case 13:
                return { DATE: params.DATE, max_hd: 6.8, min_hd: 3.4, real_hd: hd(params) };
            case 14:
                return { DATE: params.DATE, max_hd: 6.6, min_hd: 3.0, real_hd: hd(params) };
            case 15:
                return { DATE: params.DATE, max_hd: 6.4, min_hd: 3.2, real_hd: hd(params) };
            case 16:
                return { DATE: params.DATE, max_hd: 6.8, min_hd: 3.4, real_hd: hd(params) };
            case 17:
                return { DATE: params.DATE, max_hd: 6.5, min_hd: 3.6, real_hd: hd(params) };
            case 18:
                return { DATE: params.DATE, max_hd: 6.9, min_hd: 3.1, real_hd: hd(params) };
            case 19:
                return { DATE: params.DATE, max_hd: 6.5, min_hd: 3.3, real_hd: hd(params) };
            case 20:
                return { DATE: params.DATE, max_hd: 6.9, min_hd: 3.5, real_hd: hd(params) };
            case 21:
                return { DATE: params.DATE, max_hd: 6.4, min_hd: 3.7, real_hd: hd(params) };
            case 22:
                return { DATE: params.DATE, max_hd: 6.8, min_hd: 3.9, real_hd: hd(params) };
            case 23:
                return { DATE: params.DATE, max_hd: 6.2, min_hd: 3.1, real_hd: hd(params) };
            case 24:
                return { DATE: params.DATE, max_hd: 6.5, min_hd: 3.3, real_hd: hd(params) };
            case 25:
                return { DATE: params.DATE, max_hd: 6.9, min_hd: 3.5, real_hd: hd(params) };
            case 26:
                return { DATE: params.DATE, max_hd: 6.1, min_hd: 3.7, real_hd: hd(params) };
            case 27:
                return { DATE: params.DATE, max_hd: 6.4, min_hd: 3.9, real_hd: hd(params) };
            case 28:
                return { DATE: params.DATE, max_hd: 6.8, min_hd: 4.1, real_hd: hd(params) };
            case 29:
                return { DATE: params.DATE, max_hd: 5.8, min_hd: 4.3, real_hd: hd(params) };
            case 30:
                return { DATE: params.DATE, max_hd: 6.1, min_hd: 3.0, real_hd: hd(params) };
            default:
                return { DATE: params.DATE, max_hd: 0, min_hd: 0, real_hd: hd(params) };
        }
    }

    return {
        HD: hd,
        VH: vh,
        AT: at,
        ET: et,
        HDTA: HD_table
    }
}

export default plant_hd;