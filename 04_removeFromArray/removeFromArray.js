const removeFromArray = function(array,...args) {
  return array.filter(checkArray = (item) => {
    return !args.includes(item)})
}

// Do not edit below this line
module.exports = removeFromArray;
