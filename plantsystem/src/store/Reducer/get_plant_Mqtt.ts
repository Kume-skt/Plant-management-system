import { logDOM } from '@testing-library/react';

const reData = (state = {}, action: { type: string; Data: any }) => {
  switch (action.type) {
    case 'plantMqtt':
      return action.Data;
    default:
      return state;
  }
};
export default reData;
