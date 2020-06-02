// filter - filter is a higher order function on a array which takes a call back function as an argument and evaluates the 
// expression and returns us with a filtered array.
const data = [
 {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 2,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 3,
  "id": 3,
  "title": "delectus aut autem",
  "completed": true
},
{
  "userId": 4,
  "id": 4,
  "title": "delectus aut autem",
  "completed": true
}
];
const filterArray = [];
for (let i=0;i<data.length;i++) {
  if(data[i].completed) {
    filterArray.push(data[i])
  }
}
// console.log(filterArray)
const filterArr = data.filter((item) => {
  return item.completed;
}).map((item) => {
  return item.title = 'hello ' + item.title
})

console.log(filterArr)

var mapArray = [
  {name : 'Ashu',age:10},{name : 'Swati',age:20}, {name : 'SwatiBig',age:30}
  ];
const mappedArray = [];
for(let i =0;i<mapArray.length;i++) {
  mappedArray.push(mapArray[i]+1);
}
// console.log(mappedArray)

const mapped = mapArray.map(item => {
  return {name: 'my name is '+item.name, age:item.age+1}
})

const findArray = mapArray.reduce((acc,item) => {
 return acc += item.age
},0)
// console.log(findArray)
console.log(findArray)
// console.log(mapped)