const removeFromArray = function(array, a) {
    for (let x = 0; x < array.length -1; x++){
        if (a == array[x]){
          array.splice(x,1);
          
        }
    };

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
