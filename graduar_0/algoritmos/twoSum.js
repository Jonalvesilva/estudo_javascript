const nums = [2, 7, 11, 15];
const target = 9;

let twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }
      if (nums[j] + nums[i] == target) {
        if (!arr.includes(i) || !arr.includes(j)) {
          arr.push(i);
          arr.push(j);
        }
      }
    }
  }
  return console.log(arr);
};

twoSum(nums, target);
