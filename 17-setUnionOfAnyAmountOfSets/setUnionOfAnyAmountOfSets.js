function setUnionOfAnyAmountOfSets(...args) {
  var union = new Set(); //Make set that will contain every item
  args.forEach(element => { //Get a set from the argument list
    element.forEach(subElement => union.add(subElement)); //Get an element in the set from the previous line and add it to the new set
  });
  return union
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;