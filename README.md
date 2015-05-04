# slimArray
Filters redundant / duplicate elements from arrays and returns them in an optional order.

####*Usage:*####

`slimArray([array], 'order');`  
[array] is an array of numbers or strings.  
'order' is optional and can be one of two options, both of which are strings:  
  1. *asc:* - sorts the array in ascending order
  2. *desc:* - sorts the array in descending order
  
  
####*Examples:*####
```
numbers = [3, 1, 10, 3, 10, 2, 100];
slimArray(numbers) => [1, 3, 10, 2, 100]
slimArray(numbers, 'asc') => [1, 2, 3, 10, 100]
slimArray(numbers, 'desc') => [100, 10, 3, 2, 1]

names = ['Larry', 'Moe', 'Curly', 'Moe', 'Curly'];
slimArray(names) => ["Larry", "Moe", "Curly"]
slimArray(names, 'asc') => ["Curly", "Larry", "Moe"]
slimArray(names, 'desc') => ["Moe", "Larry", "Curly"]
```
