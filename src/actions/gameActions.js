import {
  GET_GAME_DATA,
  UPDATE_BID_DATA,
  UPDATE_BID_AMOUNT,
  UPDATE_BALANCE,
  RESET_BIDDING_DATA,
  GAME_RUNNING_CONFIG,
  UPDATE_PUG_LINE,
  UPDATE_HISTORY
} from "./actionTypes";

// =================================================
// This action is dispatched at the end of a round
// =================================================
/*
1: Check the total profits / losses
2: Update the balance accordingly
3: Reset the bidding data
4: Add the game info into the history object 
*/
export const readSpinnerResult = winningNumber => (dispatch, getState) => {
  const bidData = getState().game.bidData;
  // How much did the player invest in total?
  const totalInvested = Object.values(bidData).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );

  //  If the player chose the winning number , calculate the winnings
  let profits =
    bidData[winningNumber] > 0
      ? bidData[winningNumber] + bidData[winningNumber] * winningNumber
      : 0;

  console.log("Winner number :");
  console.log(winningNumber);

  console.log("Total Investment :");
  console.log(totalInvested);

  console.log("Winnings :");
  console.log(profits);

  console.log("Total balance : ");
  console.log(profits - totalInvested);

  // Update the balance
  // No need to decrement the lost investment because that happens in the bidding phase
  dispatch({
    type: UPDATE_BALANCE,
    payload: profits
  });

  //  RESET ALL THE BIDDING DATA
  dispatch({
    type: RESET_BIDDING_DATA
  });

  dispatch({
    type: UPDATE_PUG_LINE,
    payload:
      profits - totalInvested > 0
        ? `You winz dis time... ${profits - totalInvested} $!!!. Very good mr.human`
        : Math.random() * 50 > 100 ? `Hoomanz are stupids. Dats why im rich!! You lost ${totalInvested -
            profits} $` : `hehe more doggie cookiez for me. You lost ${totalInvested -
              profits} $`
  });

  dispatch({
    type: UPDATE_HISTORY ,
    payload : {
      winningNumber ,
      total : Math.abs(profits - totalInvested),
      win : profits - totalInvested > 0 ? true : false
    }
  })

  // Add game data to history : (winning number + user win/loss)
};

// =================================================
// Player adds or removes a bid
// =================================================
export const updateBidData = (ballId, amount) => (dispatch, getState) => {
  // Is the balance going to be negative ? if so , do not dispatch action
  if (getState().game.balance - amount >= 0) {
    /* 
    console.log(getState().game.balance);
    console.log(amount);
    console.log(getState().game.balance - amount);
    */

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

// =================================================
// Standard get state
// =================================================
export const getGameData = () => ({
  type: GET_GAME_DATA
});

// =================================================
// Player sets global bid selector (5,10,20,50,100)
// =================================================
export const updateBidAmount = amount => ({
  type: UPDATE_BID_AMOUNT,
  payload: amount
});

export const gameRunningConfig = isRuning => ({
  type: GAME_RUNNING_CONFIG,
  payload: isRuning
});

export const updatePugLine = line => ({
  type : UPDATE_PUG_LINE ,
  payload : line
})

export const updateHistory = data => ({
  type: UPDATE_HISTORY ,
  payload : data
})