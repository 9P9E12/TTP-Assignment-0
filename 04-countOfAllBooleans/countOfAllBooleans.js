function countOfAllBooleans(arr) {
  var bools = 0;
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "boolean"){
      bools++;
    }
  }
  return bools;
}

// Do not edit this line;
module.exports = countOfAllBooleans;