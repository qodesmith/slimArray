var slimArray = function(array) {

  var length    = array.length,
      is_found  = false;
      new_array = [];
  
  for(var i = 0; i < length; i++) {
    is_found = false; // Reset is_found on each iteration.
    var a = array[i];

    if(i === length - 1) { // If we're at the last element in the array.
      new_array.push(a);
      return new_array.sort(asc); // Return the new array in ascending order.
    } else {
      for(var j = i + 1; j < length; j++) { // 'Compare' iteration loop.
        var b = array[j];
        if(a === b) {is_found = true};
        if(j === length - 1) { // If we're at the last comparison,
          if(!is_found) { // and no match has been found,
            new_array.push(a) // push the compared.
          }
        }
      }
    }

  }
};

function asc(a,b) {
  // return a > b = ascending order
  // return b > a = descending order
  return a > b;
};