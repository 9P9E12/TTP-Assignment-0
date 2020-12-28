function countOfAllBooleansAndStrings(arr) {
  var boolsAndStrings = 0;
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "boolean" || typeof arr[i] === "string"){
      boolsAndStrings++;
    }
  }
  return boolsAndStrings;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;