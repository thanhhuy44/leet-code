function maximumWealth(accounts: number[][]): number {
  let max: number = 0;
  for (let index = 0; index < accounts.length; index++) {
    let rowMax = accounts[index][0];
    for (let j = 1; j < accounts[index].length; j++) {
      rowMax += accounts[index][j];
    }
    if (rowMax >= max) {
      max = rowMax;
    }
  }

  return max;
}

const results = maximumWealth([
  [95],
  [95],
  [64],
  [96],
  [100],
  [74],
  [44],
  [100],
  [97],
  [99],
  [45],
  [98],
  [34],
  [16],
  [39],
  [81],
  [38],
  [46],
  [73],
  [12],
  [72],
  [91],
  [20],
  [63],
  [58],
  [40],
  [72],
  [97],
  [49],
  [3],
  [37],
  [71],
  [67],
  [38],
  [39],
  [20],
  [71],
  [90],
  [6],
  [31],
  [20],
  [4],
]);

console.log("🚀 ~ maximumWealth ~ results:", results);
