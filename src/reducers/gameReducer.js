import {
  GET_GAME_DATA,
  UPDATE_BID_DATA,
  UPDATE_BID_AMOUNT
} from "../actions/actionTypes";

const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BID_DATA: {
      //  1 - Update bidData
      //  2 -Update balance
      const bidData = { ...state.bidData };
      bidData[action.payload.ballId] += action.payload.amount;
      return {
        ...state,
        bidData,
        balance: state.balance - action.payload.amount
      };
    }

    case UPDATE_BID_AMOUNT: {
      return {...state , bidAmount : action.payload}
    }

    case GET_GAME_DATA:
      return state;

    default:
      return state;
  }
};

export default gameReducer;
