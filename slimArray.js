var slimArray = function(array, order) {

  var length    = array.length,
      isFound  = false;
      newArray = [];

  var asc = function(a,b) {
    return a > b;
  };

  var desc = function(a,b) {
    return a < b;
  };   
  
  for(var i = 0; i < length; i++) {
    isFound = false; // Reset isFound on each iteration.
    var a = array[i];

    if(i === length - 1) { // If we're at the last element in the array.
      newArray.push(a);
      return newArray.sort(eval(order)); // Return the new array in ascending / descending order.
    } else {
      for(var j = i + 1; j < length; j++) { // 'Compare' iteration loop.
        var b = array[j];
        if(a === b) {isFound = true};
        if(j === length - 1) { // If we're at the last comparison,
          if(!isFound) { // and no match has been found,
            newArray.push(a) // push the compared.
          }
        }
      }
    }

  }
};