//Actionの処理
const reData = (state = {}, action: { type: string; Data:any}) => {
   switch (action.type) {
       case 'plantData':
           console.log("action.Data");
           console.log(action.Data);
           
           return action.Data;
       
      default:
          return state
   }
};
export default reData;