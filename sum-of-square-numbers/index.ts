function judgeSquareSum(c: number): boolean {
  // c = 0 or c = 1 is always right
  if (c === 0 || c === 1) return true;

  const sqC = Math.trunc(Math.sqrt(c));

  for (let num = 1; num < sqC + 1; num++) {
    const secondNum = Math.sqrt(c - num ** 2);

    if (secondNum === Math.trunc(secondNum)) return true;
  }

  return false;
}

const isSquareSum = judgeSquareSum(5);
console.log("🚀 ~ isSquareSum:", isSquareSum);
