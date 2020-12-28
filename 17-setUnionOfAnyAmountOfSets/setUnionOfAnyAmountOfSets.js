function setUnionOfAnyAmountOfSets(...args) {
  var union = new Set();
  args.forEach(element => {
    element.forEach(subElement => union.add(subElement));
  });
  return union
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;