function countOfAllIndexMatchingNumbers(nums) {
  var matched = 0;
  for (var i = 0; i < nums.length; i++) {
    if(i === nums[i]){
      matched++;
    }
  }
  return matched;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;