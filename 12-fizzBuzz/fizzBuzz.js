function fizzBuzz(start, end) {
  var output = [];
  for(var i = start; i <= end; i++){
    var result = "";
    if(i % 3 === 0){
        result = result.concat("Fizz");
    }
    if(i % 5 === 0){
        result = result.concat("Buzz");
    }
    if(result.length === 0){
        result = i;
    }
    output.push(result);
  }
  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;