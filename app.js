'use strict';

var myArray = ["Jack", "John", "Mike", "Dana"];
myArray.sort();

function sortNames(myArray) {
  var result = [];

for (var i = 0; i < myArray.length; i++) {
  result.push(myArray[i][0].toUpperCase() + myArray[i].slice(1));
}
result.sort();
return result;

}
console.log(sortNames());
