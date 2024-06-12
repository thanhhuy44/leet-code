function sortColors(nums: number[]): void {
  for (let index = 0; index < nums.length; index++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[j] < nums[j - 1]) {
        let val = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = val;
      }
    }
  }
}

sortColors([2, 0, 2, 1, 1, 0]);
