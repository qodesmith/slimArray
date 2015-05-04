# slimArray
Filters redundant elements from arrays and returns them in ascending order.

*Usage:

`slimArray([array], 'order');`  
'array' = an array of numbers or strings.  
'order' is optional and can be one of two options, both of which are strings:  
  1. *'asc':* - sorts the array in ascending order
  2. *'desc':* - sorts the array in descending order
  
  
*Examples:*  
```
numbers = [1, 2, 2, 3, 4, 4, 5];
slimArray(numbers) => [1, 2, 3, 4, 5]

names = ['Moe', 'Larry', 'Curly', 'Larry', 'Moe'];
slimArray(names) => ['Curly', 'Larry', 'Moe']
```
