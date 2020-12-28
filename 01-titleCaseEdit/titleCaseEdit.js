function titleCaseEdit(title) {
  var words = title.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word[0].toUpperCase() + word.substr(1);
  }
  return words.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;