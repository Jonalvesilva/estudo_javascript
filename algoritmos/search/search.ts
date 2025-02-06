var searchInsert = function (nums, target) {
  const index = nums.indexOf(target);

  if (index != -1) return index;

  const maxIndex = nums.indexOf(
    Math.min.apply(
      Math,
      nums.filter((num) => num > target)
    )
  );

  if (maxIndex == -1) return nums.length;

  return maxIndex;
};
