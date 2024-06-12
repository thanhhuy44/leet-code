type Fn1 = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn1): number[] {
  const arrResult: number[] = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) {
      arrResult.push(arr[index]);
    }
  }
  return arrResult;
}

const test = filter([0, 10, 20, 30], (n) => n > 10);
console.log("🚀 ~ test:", test);
