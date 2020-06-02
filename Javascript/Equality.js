// Equality Operator

// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
// Assignment Operator (=)
// Equality Operator (==)
// type Coeration happens in Equality Operator.

// Equality 

if (1 == true) {
    console.log('Validated')
  } else {
    console.log('Not Equal')
  }
  
  if (1 != true) {
    console.log('Validated')
  } else {
    console.log('Not Equal')
  }
  
  // Stricly Equality operator
  if (1 === true) {
    console.log('Validated')
  } else {
    console.log('Not Equal')
  }
  
  if (1 !== true) {
    console.log('Validated')
  } else {
    console.log('Not Equal')
  }
  
  
  // Equality Operator
  // equality operator is used evaluate a expression, it will always return a boolean value.
  
  // There are two types of Equality operator.
  // 1. Equality operator : == // Type coeration happens from right to left/ right to Left.
  // It is mostly used in conditional loops or conditional checks.
  if (1==1) {
    console.log('Equal')
  }
  // Equality Operator with type coeration.
  
  console.log(1 =='1'); // string type converted to number.
  console.log('1'== 1); // number type converted to string.
  console.log(1==2); // Not Equal
  console.log(1==true); // since true is boolean return 1 . it evaluates the expression as true.
  console.log(typeof(1));
  console.log(typeof('true'));
  console.log(Number('true'));
  console.log(1=='true'); // since 'true' is converted to number and it results in NaN . i.e 1 is not equal to NaN , expression evealutes
  // to false
  console.log(Number(true));
  console.log(1==true);
  
  console.log(typeof(NaN));
  console.log(NaN == NaN);
  console.log(NaN == undefined);
  console.log(undefined == undefined); // return true
  console.log( {} == {}) // object cannot be equal to other object.
  console.log(typeof(null));
  console.log(null == null);
  
  // 2. Strictly Equality operator : === // Type Coeration not possible. Values both the sides should be of the same type.
  
  console.log(1 === true); // returns false 
  console.log(1 === 'true');
  console.log(true === 'true');
  console.log(2 === 2);
  console.log(NaN === NaN);
  const striclyObject = {};
  let referenceObject = striclyObject;
  console.log({} === {})
  console.log(striclyObject === referenceObject);
  
  // Not Equal.
  // 1 . Not Equality Operator : !=
  console.log(1 != true);
  console.log(1 != 'true');
  console.log(true != 'true');
  console.log(2 != 2);
  console.log(NaN != NaN);
  
  
  // 2. Stricly Not Eqaulity Operator : !==
  console.log(1 !== true);
  console.log(1 !== 'true');
  
  
  // Comparison with the Greater Than Operator
  // greater than operator will convert data types of values while comparing.
  console.log(1 > 0)
  console.log(0 < 1)
  
  console.log(1 < 0)
  console.log(1 > true)
  
  console.log(5>6>7) // evaluate from left to right.
  console.log(5<6<7)
  
  console.log(7  > '3')
  
  // Greater than or Equal to.
  
  console.log(6  >=  6)   // true
  console.log(7  >= '3')  // true
  console.log(2  >=  3)   // false
  console.log('7' >=  9 )  // false
  
  // Comparison with the Less Than Or Equal To Operator.
  
  console.log(4   <= 5 ); // true
  console.log('7' <= 7); // true
  console.log(5   <= 5); // true
  console.log(3   <= 2 ); // false
  console.log('8' <= 4   ); // false
  
  console.log(7  > '6')
  
  console.log(Number('true'))
  console.log(1  == 'true')
  
  




// Logical Operator in Javascript
// It is used in Conditional Check 
// 1. AND Operator &&.
if (true && 1) {
  console.log('Reached')
}
// 2. OR Operator ||.
if (true || 2) {
  console.log('Reached')
}

if ((true || 2) && (true || 3 )) {
  console.log('Reached')
}

if ((true && 2) || (true || 1 )) {
  console.log('Reached')
}


// Else statement.
var elseCheck;
// !! - cast to boolean
// + - cast to integer
console.log(typeof(!elseCheck))
if (!elseCheck) {
  console.log('This line of code is condition is true')
} else {
  console.log('This line of code is condition is false')
}



// JSON 

let stringObj = {
  name : 'ashutosh',
  mode : 'angry'
}

// JSON is a lightweight, text-based, language-independent data interchange format.
console.log(stringObj);
console.log(stringObj)
// api call , we convert to Javascript object to JSON.(Javascript Object Notation.)
stringObj = JSON.stringify(stringObj);
console.log(stringObj);
// after api call response will come in JSON, JSONP;
stringObj = JSON.parse(stringObj);
console.log(stringObj);



var nullCheck = null;
var syso = {}
if (syso && Object.keys(syso).length) {
  console.log('This line of code is condition is true')
} else {
  // console.log('This line of code is condition is false')
}

// we did a api call;
 dataJson = {
  "name": {
    firstName: 'Ashutosh',
    lastName: 'Chaudhary'
  }
 }

 console.log(Object.keys(dataJson.name));
 console.log(Object.entries(dataJson.name));
 console.log(Object.values(dataJson.name));

dataJson = JSON.stringify(dataJson);
dataJson = JSON.parse(dataJson);
  if (dataJson.name && Object.keys(dataJson.name).length && dataJson.name.hasOwnProperty('firstName')) {
  // if (dataJson.name && dataJson.name.hasOwnProperty('firstName')) {
  console.log(`This line of code is condition is true ${dataJson.name.firstName}`)
} else {
  console.log('This line of code is condition is false')
}

// Else If 

// If is single conditional statement check.
// Else if is used for multiple conditional Check.

var currentDate = new Date();
console.log(currentDate);
var hours = currentDate.getHours();
console.log(currentDate.getHours());
if (hours < 12) {
  console.log('Guten Morgen!!')
} else if(hours>= 12 && hours < 17) {
  console.log('Good Afternoon!!')
} else {
  console.log('Good Night!!')
}


function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
console.log(bar(1))

console.log(foo(0.9))

console.log(1-'1');

var a = '1'
// console.log(1-(--a));
console.log(1-(a--));
console.log(a)

var currentHour = new Date();
console.log(typeof(currentHour));




  
  
  
  
  
  
  
  