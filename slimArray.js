var slimArray = function(array, order) {
  // Some array-checking logic.
  if(array.constructor.name != 'Array') {return 'You didn\'t give me an array.'};
  if(array.length === 0) {return array};

  var length   = array.length,
      isFound  = false,
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
      return order ? newArray.sort(eval(order)) : newArray; // 'Ordered-or-not' logic.
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