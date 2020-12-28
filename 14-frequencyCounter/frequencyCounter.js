function frequencyCounter(word) {
  var frequency = new Object();
  for (var i = 0; i < word.length; i++) {
    if(word[i] in frequency){
      var prev = frequency[word[i]];
      frequency[word[i]] = prev+1;
    } else {
      frequency[word[i]] = 1;
    }
  }
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;