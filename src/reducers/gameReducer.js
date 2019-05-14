import {
  GET_GAME_DATA,
  UPDATE_BID_DATA,
  UPDATE_BID_AMOUNT,
  UPDATE_BALANCE,
  RESET_BIDDING_DATA,
  GAME_RUNNING_CONFIG,
  UPDATE_PUG_LINE,
  UPDATE_HISTORY
} from "../actions/actionTypes";

import initialData from "../assets/consts/initialGameData";

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
      return { ...state, bidAmount: action.payload };
    }

    case UPDATE_BALANCE: {
      return { ...state, balance: state.balance + action.payload };
    }

    case RESET_BIDDING_DATA: {
      return { ...state, bidData: { ...initialData.game.bidData } };
    }

    case GAME_RUNNING_CONFIG: {
      return { ...state, gameIsRunning: action.payload };
    }

    case UPDATE_PUG_LINE : {
      return {...state, pugLine : action.payload}
    }

    case UPDATE_HISTORY : 
    return {...state , history : [action.payload , ...state.history]}

    case GET_GAME_DATA:
      return state;

    default:
      return state;
  }
};

export default gameReducer;
