function sumOfNumsWithinARange(nums, start, end) {
  var matched = 0;
  for (var i = 0; i < nums.length; i++) {
    if(start <= nums[i] && nums[i] <= end){
      matched++;
    }
  }
  return matched;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;