function sumOfAllEvenNumbers(nums) {
  var matched = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0){
      matched++;
    }
  }
  return matched;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;