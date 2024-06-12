type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
  if (!nums.length) {
    return init;
  }
  for (let index = 0; index < nums.length; index++) {
    init = fn(init, nums[index]);
  }

  return init;
}

const testResult = reduce([1, 2, 3, 4], (a, b) => a + b * b, 100);
console.log("🚀 ~ testResult:", testResult);
