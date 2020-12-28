function countOfAllNumbersSmallerThanTarget(nums, target) {
  var smaller = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] < target){
      smaller++;
    }
  }
  return smaller;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;