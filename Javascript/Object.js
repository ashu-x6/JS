// Object in Javascript.
// Array is group of similar/ homogenous data.

var arr = [1, '2', true, null, {}]

var human = {
  name : 'Ashutosh', // name is a property
  place : 'Jamshedpur',
  iq : 7,
  age : 27,
}

// Objects store data in Key/Value pairs.

// Booleans can be objects (if defined with the new keyword).
var bool = new Boolean();
console.log(typeof(bool))
// Numbers can be objects (if defined with the new keyword).
var num = new Number(7);
console.log(num)
console.log(typeof(num))
var number = 7
console.log(number)
// Strings can be objects (if defined with the new keyword).
// Dates are always objects.
// Maths are always objects.
// Regular expressions are always objects.
// Arrays are always objects.
// Functions are always objects.
// Objects are always objects.


// primitive datatypes in JS
// JavaScript defines 5 types of primitive data types:

// string
// number
// boolean
// null
// undefined

// Primitive values are immutable (they are hardcoded and therefore cannot be changed).
// immutable means it cannot be changed.


var employes = {
  name : 'Ashutosh', // name is a property
  place : 'Jamshedpur',
  iq : 7,
  age : 27,
  company : {
    name: 'Operative',
    place: 'IBC Knowledge Park'
  }
}
// Accessing Object Properties with Dot Notation.
console.log(employes.name)
console.log(employes.age)
console.log(employes.company.name)

// Accessing Object Properties with Bracket Notation.

console.log(employes['name'])

// Accessing Nested Objects.
console.log(employes.company['name'])


// Accessing Object Properties with Variables.
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var dogName = "Fido";
console.log(dogs[dogName])


// Updating Object Properties.
dogs.Fido = "Hachi";
console.log(dogs);
// Adding new Properties.
dogs.Milatary = "Army";
console.log(dogs);



var complexObj = {
  num : 1,
  str : "String",
  bool : true,
  obj : {},
  func : this.objFunc()
}

// Objects cannot have duplicate property/key name.
complexObj.num = 2;
console.log(complexObj);
function objFunc() {

}

// Delete Object Properties.
delete complexObj.num;
console.log(complexObj);


var lookup = {
    alpha : "Adams",
    bravo : 'Boston',
    charlie : 'Chicago',
    delta : 'Denver',
    echo: 'Easy',
    foxtrot : 'Frank'
  }

function phoneticLookup(lookup, val) {
  var result = "";

  // Only change code below this line
  // Testing Objects for Properties
  // .hasOwnProperty()
  if (lookup.hasOwnProperty(val)){
    result = lookup[val]
  } else {
    result = 'No Data Found'   
  }

  // Only change code above this line
  return result;

}

console.log(phoneticLookup(lookup,"charlie"));


// You will need to place a comma after every object in the array, unless it is the last object in the array.

// Iterate with JavaScript While Loops.
// While loops are entry controlled loops .
// Infinite locking mechanism uses while loop .

var ourArray = [];
var i = 0;
while(ourArray.length < 11) {
  ourArray.push(i);
  i++;
}
console.log(ourArray)

// Iterate with JavaScript For Loops.
// for ([initialization]; [condition]; [final-expression])

//  Iterate Through an Array with a For Loop.
var j = 0;
for (j;j<ourArray.length;j+=2) {
  if (j > 0) {
  console.log(ourArray[j])
  }
}

// Count Backwards With a For Loop.

for (var i = ourArray.length; i>0; i -=2){
  console.log(ourArray[i])
}

// Nesting For Loops.

function multiplyAll(arr) {
  var product = 1;
  for (var i=0;i<arr.length;i++) {
    for(var j =0;j<arr[i].length;j++) {
      product *= arr[i][j]
    }
  }
  return product;
}

// console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// Iterate with JavaScript Do...While Loops
// Do While loops are exit controlled loops.
var doWhileArray = [];
var k = 0;
do {
  doWhileArray.push(k);
  k++;
// } while (k < 10);
} while (k < 0);


console.log(doWhileArray);

// Replace Loops using Recursion.

// What is Recursion? 
// Recursion is a function which calls itself.


function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

console.log(multiply([1,2,3,4], 3))

 function multiplyRecurrsion(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

console.log(multiplyRecurrsion([1,2,3,4], 3))
// Recursive functions must have a base case when they return without calling the function again.
