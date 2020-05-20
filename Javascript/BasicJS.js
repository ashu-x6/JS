// This code is single line comment.

/* This is a multi 
Line comment */

// Data Types in JS
//  undefined, null, boolean, string, symbol, number, and object.

let value;
console.log(value)
console.log(typeof(value))
value = 5;
console.log(value)

// null - null is a Object in JS

let valueNull = null;
console.log(valueNull);
console.log(typeof(valueNull));

// boolean - 1 or 0

let boolTrue = true;
console.log(boolTrue)
console.log(typeof(boolTrue))
let boolFalse = false;
console.log(boolFalse)

// String
let wordSingleQuote = 'Example';
console.log(typeof(wordSingleQuote))
let wordDoubleQuote = "Exam";
// Template Literal Strings - BackTick (below esc key)
let lineMulti = `This is 
a multi`;
console.log(lineMulti)

// Symbol
console.log(typeof(Symbol))

// Number
let num = 1.0;
console.log(typeof(num));

// Object
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar , typeof(myCar));

let myBike = {
  name : "Name"
};
myBike.person = "Person"
console.log( myBike, typeof(myBike))

console.log(null === null)
let nullObj = {};
let nullObj2 = {};
console.log(nullObj === nullObj2)

// Keyword in JS
// let, const, var , enum.

// Storing Values with the Assignment Operator
// ES-5 : Year 2011

// var num; //  Variable Declaration  !important
console.log(num)
var Number = 5 // variable Declaration and initialisation  !important
console.log(Number);
num = Number
console.log(num)

// Understanding Uninitialized Variables
var a;
var b;
var c;
// Only change code above this line
console.log(a ,b ,c)

a = a + 1; // NaN :  Not a Number
b = b + 5;
c = c + " String!";

console.log(a ,b ,c)

// Understanding Case Sensitivity in Variables
// Pascalcase , camelCase    !important

// ES-6 : Year 2015