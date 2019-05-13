const bidData = {
  // info about balls in this turn
  "1": 0,
  "3": 0,
  "5": 0,
  "11": 0,
  "23": 0,
  "35": 0,
  "47": 0
};

const balls = [
  { img: "1", id: "1" },
  { img: "3", id: "3" },
  { img: "5", id: "5" },
  { img: "11", id: "11" },
  { img: "23", id: "23" },
  { img: "35", id: "35" },
  { img: "47", id: "47" }
];

const game = {
  balance: 1500,
  bidAmount: 10,
  bidData,
  balls
};

export default {
  game
};
