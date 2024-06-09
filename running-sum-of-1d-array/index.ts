// function runningSum(nums: number[]): number[] {
//   let result: number[] = [];
//   result[0] = nums[0];
//   for (let index = 1; index < nums.length; index++) {
//     result[index] = nums[index] + result[index - 1];
//   }
//   return result;
// }

function runningSum(nums: number[]): number[] {
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1];
  }
  return nums;
}

const result = runningSum([1, 2, 3, 4]);
console.log("🚀 ~ result:", result);
