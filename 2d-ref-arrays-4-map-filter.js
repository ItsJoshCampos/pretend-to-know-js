//************ MAP & Filter ES6
let lottery = [3, 4, 8, -9, -2, 1, 7];
let validEntries = lottery.filter(i => i > -1);
console.log(validEntries);

let scored = validEntries.map(f => ({
  entry: f,
  isWinning: Math.random() >= 0.5
}));
console.log(scored);
