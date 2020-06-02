// String Immutability: In JS Strings are immutable
// immutable means once assigned cannot be altered.
// In JS Strings are arrays

var stringImmutable = "String";
console.log(stringImmutable[0])
stringImmutable[1] = "T" // This string is Immutable.
console.log(stringImmutable)
stringImmutable = "Ttring"
console.log(stringImmutable)

// Bracket Notation to find the nth letter of string.
var index = stringImmutable.length-1;
console.log(stringImmutable[index])
console.log(stringImmutable[2]) // From start 3rd character
console.log(stringImmutable[index-2]) // From last Third character

//Word Blanks.
var noun = "hot"
var sentence = "It was really " + noun + ", and we " + "laughed" + " ourselves " + "silly" + ".";
console.log(sentence);

// Arrays in JS.
// Array is group of similar(homogenous) items.
var arrayWhiskey = ['Teachers', 'Blenders Pride', 'Old Monk' ,'Vat 69', 'Black Dog']
var arraySnacks = ['Lays', 'Peanuts']
arrayWhiskey.push(arraySnacks)
console.log(arrayWhiskey, arraySnacks);
// Access Array items using index.
console.log(arrayWhiskey[0], arrayWhiskey[arrayWhiskey.length-1])
console.log(arrayWhiskey[arrayWhiskey.length-1][0]) // Access Multi-Dimensional array with indexes.
// Modify Array items using index.
arraySnacks[2] = "Kurkure";
arraySnacks[1] = "ChatarMatar";
console.log(arraySnacks)

// Push , Pop, Shift, Unshift
var arrayManipulate = ["Donkey", "Bear", "Lion", "Deer"];
arrayManipulate.push('Cat') // Adds the element to the last of array.
console.log(arrayManipulate);
arrayManipulate.pop() // Removes the last element of array.
console.log(arrayManipulate);
arrayManipulate.unshift('Monkey'); // Adds the element to the first index of array.
console.log(arrayManipulate);
arrayManipulate.shift(); // Removes the first element of the array.

// Sub-Arrays
var shoppingList = [["Chocolate Bar", 15],["Aloo Bhujia", 10]]
console.log(shoppingList)

// Write Reusable JavaScript with Functions.

function reusableFunction() {
  // alert('Hello Swati');
  console.log("Hello")
}

reusableFunction();

// Passing Values to Functions with Arguments.

function argumentFunction(response) {
  console.log(response)
}

var obj = {
  name: 'swati',
  age: 29
}

argumentFunction(obj)

//  Global Scope and Functions

var global = 'COVID-19'
console.log(global)

function localScope() {
  var global = 'LOCKDOWN';
  console.log(global)
}
localScope();

// Local Scope and Functions.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
// console.log(loc);

// Global vs. Local Scope in Functions.

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(myFun());
console.log(someVar);

// Return a Value from a Function with Return

function returnFunction() {
  // return 1+1;   // will return undefined.
  return 1+1;
}
console.log(returnFunction());

//  Assignment with a Returned Value.
// Javascript has first class functions i.e function can be passed as an argument to another functions/ can be assigned to a variable/ can be declared inside another functions(closure).
var anonymous = (a,b) => {
  return a+b;
}
console.log(anonymous(1,2))

// Understanding boolean Values.

function booleanValues(item) {
  if (1===item) {
    return true;
  } return false;
}

console.log(booleanValues(1));
var booleanCheck = booleanValues(2)
if(booleanCheck) {
  alert('Hello')
} else {
  console.log("false")
}

//  Use Conditional Logic with If Statements.
if (true) {
  console.log("Entered If Block")
} else {
  console.log("Entered else Block")
}
