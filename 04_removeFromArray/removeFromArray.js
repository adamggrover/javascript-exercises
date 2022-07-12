const removeFromArray = function(array, a) {
    for (let x = 0; x < array.length; x++){
        if (a == array[x]){
          array.splice(x,x);
          return array;
        }
    };
};

// Do not edit below this line
module.exports = removeFromArray;
