const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return console.log(nums);
};

removeElement(nums, val);
