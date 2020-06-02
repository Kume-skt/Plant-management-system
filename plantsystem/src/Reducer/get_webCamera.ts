//Actionの処理
const reData = (state = "", action: { type: string; Data: any }) => {
    switch (action.type) {
        case 'webCamera':

            return action.Data

        default:
            return state
    }
};
export default reData;