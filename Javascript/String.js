// Arithmetic operation in Javascript.

let a = 5;
let b = 15;

console.log(a+b) // Sum 
console.log(a-b) // Difference 
console.log(a*b) // Multiply 
console.log(b/a) // divide 
console.log(b%a) // modulus 
console.log(a++) // increment
console.log(++a) // increment : Pre Increment
console.log(a++) // increment : Post Increment
console.log(b--) // decrement : Post Decrement
console.log(--b) // decrement : Pre Decrement

// Decimal Numbers in JS

var Decimal = 0.5;
var Deci = 0.5
console.log(Decimal)
console.log(Decimal * Deci)
console.log(Decimal/Deci)
console.log(Decimal%Deci)

// Augmented Operation

var AugmentedNumber = 5;
console.log(AugmentedNumber +=5)
console.log(AugmentedNumber -=5)
console.log(AugmentedNumber /=5)
console.log(AugmentedNumber *=5)

// Escape Charater \ : Backslash (down to backspace)

var sentence = "I am a \"double quoted\" string inside \"double quotes\"."
console.log(sentence)

// Concatenating Strings

var stringConcat = "String" + " is " + "Concatenated."
console.log(stringConcat)
var augmentedString = "Augmented : "
augmentedString += stringConcat;
console.log(augmentedString)
var stringConcatVariable = "Hi " + augmentedString;
console.log(stringConcatVariable);

// Length of String;

var stringLength = "CheckLength"
console.log(stringLength.length);
console.log(typeof(stringLength.length))
// Bracket Notation to access string index.
// console.log(stringLength[0]);
let stringFrom = '';
for(let i=0; i<stringLength.length; i++) {
  if (stringLength[i] == stringLength[i].toUpperCase()) {
      stringFrom += stringLength[i].toLowerCase();
  } else {
    stringFrom += stringLength [i].toUpperCase();
  }
}

let formatString = stringLength.split('').map((item) => {
  return item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
}).join('')

console.log(formatString)
console.log(stringFrom)









