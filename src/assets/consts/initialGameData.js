const bidData = {
  // info about balls in this turn
  "1": 0,
  "3": 0,
  "5": 0,
  "10": 0,
  "21": 0,
  "45": 0
};

const gameIsRunning = false

const balls = [
  { img: "1", id: "1" },
  { img: "3", id: "3" },
  { img: "5", id: "5" },
  { img: "10", id: "10" },
  { img: "21", id: "21" },
  { img: "45", id: "45" }
];

const pugLine = "Welcome to the spinning game. Very simple - bet on these numbers, and get your prize! (or lose and give me your money)"

const history = []

const game = {
  balance: 1500,
  bidAmount: 10,
  bidData,
  balls,
  gameIsRunning ,
  pugLine ,
  history
};


export default {
  game
};
