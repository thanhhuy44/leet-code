function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  let maxProfit = 0;
  let arrDiffPro: { difficulty: number; profit: number }[] = [];

  for (let index = 0; index < difficulty.length; index++) {
    arrDiffPro.push({ difficulty: difficulty[index], profit: profit[index] });
  }
  arrDiffPro.sort((a, b) => b.profit - a.profit);
  worker = worker.sort((a, b) => b - a);

  let iw = 0; //current index of worker array
  let ip = 0; //current index of new array from profit and difficult

  while (iw < worker.length && ip < profit.length) {
    if (worker[iw] >= arrDiffPro[ip].difficulty) {
      maxProfit += arrDiffPro[ip].profit;
      iw++;
    } else {
      ip++;
    }
  }

  return maxProfit;
}
