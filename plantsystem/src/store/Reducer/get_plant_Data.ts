const reData = (state = {}, action: { type: string; Data: any }) => {
  switch (action.type) {
    case 'plantData':
      return action.Data;

    default:
      return state;
  }
};
export default reData;
