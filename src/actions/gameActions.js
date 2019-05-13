import {
  GET_GAME_DATA,
  UPDATE_BID_DATA,
  UPDATE_BID_AMOUNT
} from "./actionTypes";

export const updateBidData = (ballId, amount) => (dispatch, getState) => {
  // Is the balance going to be negative ? if so , do not dispatch action
  if (getState().game.balance - amount >= 0) {
    console.log(getState().game.balance);
    console.log(amount);
    console.log(getState().game.balance - amount);
  // Is the ball value in bidData is going to be less than 0 after update ?
  //  If so , make it that it will result in a 0
    if (getState().game.bidData[ballId] + amount < 0)
      amount = getState().game.bidData[ballId] * -1;

    dispatch({
      type: UPDATE_BID_DATA,
      payload: {
        ballId,
        amount
      }
    });
  }
  return;
};

export const getGameData = () => ({
  type: GET_GAME_DATA
});

export const updateBidAmount = amount => ({
  type: UPDATE_BID_AMOUNT,
  payload: amount
});
