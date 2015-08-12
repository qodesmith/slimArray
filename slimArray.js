var slimArray = function(array, order) {
  var length   = array.length,
      newArray = [];

  // Some array-checking logic.
  if(array.constructor.name !== 'Array') { return 'You didn\'t give me an array.' };
  if(!length) { return array };

  // Order sorting functions.
  function asc(a,b) { return a - b };
  function desc(a,b) { return b - a };

  // Supplied array iteration.
  for(var i = 0; i < length; i++) {
    var a = array[i];

    // If newArray is empty, push 'a' into it.
    if(!newArray.length) { newArray.push(a) };

    // Check supplied array against newArray.
    for(var j = 0; j < newArray.length; j ++) {
      if(a === newArray[j]) { // If we find a match, break this loop.
        break;
      } else if(j === newArray.length - 1) { // If no match has been found, push 'a' into newArray
        newArray.push(a);
      }
    }
  }

  return order ? newArray.sort(eval(order)) : newArray; // 'Ordered-or-not' logic.
};