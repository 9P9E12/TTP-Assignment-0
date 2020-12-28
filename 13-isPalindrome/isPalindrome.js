function isPalindrome(word) {
  var reversed = word.split("").reverse().join("");
  return word === reversed;
}

// Do not edit this line;
module.exports = isPalindrome;