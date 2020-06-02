// Switch

//switch is a type of conditional statement that will evaluate an expression against multiple possible
// cases and execute one or more blocks of code based on matching cases.

function switchCheck(val) {
  // console.log(val) 
  switch(val) {
  case '1':
  console.log('1')
  break;

  case '2':
  case '3':
  console.log('2')
  break;

  default:
  console.log('0')
}
}

switchCheck('3');

// Type coercion  does not happen in switch case.

// Returning Boolean Values from Functions.

function validationCheck(Boolean) {
  if (Boolean) {
    return true;
  } 
}

console.log(!!validationCheck(true))
console.log(!!validationCheck())

// Return Early Pattern for Functions.

function earlyPattern() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
console.log(earlyPattern());

const numCheck = (val) => {
  if (val > 3) {
  return 'Limit Reached'
  }
}
function arrayCheck() {
  const arr = [1,2,3,4,5,6];

  // arr.forEach(numCheck)
  let string;
  arr.forEach((item) => {
    if(item > 5) {
      console.log('1')
      string = 'limit reached'
    }
  })
  return string;
}

console.log(arrayCheck())


count = 1;
count = count +1;
count += count;
console.log(count)