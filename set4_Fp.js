//1
const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength = (arr) => {
     return arr.reduce((acc,curr)=>acc+curr.length ,0)
}
console.log(totalLength(strings));
// Output: 30


//2

function sumSquares(numbers) {
  return numbers.reduce((acc, num) => acc + num * num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumSquares(numbers)); // Output: 55


//3
function totalValue(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 }
];

console.log(totalValue(items)); 
// Output: 60


//4
function concatStrings(strings) {
  return strings.reduce((acc, str) => acc + str, '');
}

const stringss = ['this', 'is', 'fun'];
console.log(concatStrings(stringss)); // Output: 'thisisfun'



//5
function product(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

const numberss = [1, 2, 3, 4, 5];
console.log(product(numberss)); // Output: 120

//6
const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (arr) => {
     return arr.reduce((acc,curr)=> curr.length > acc.length ? acc=curr : acc  ,arr[0])
}
console.log(longestString(strings1)); 
// Output: 'Haule Haule'

//7
const people = [
            {name: 'Jeena', age: 25}, 
            {name: 'Priya', age: 30}, 
            {name: 'Naina', age: 45}
]

const oldestPersonName = (arr) => {
     let highest=0
     return arr.reduce((acc, curr) => {
          if (curr.age > highest) {
               acc = curr.name
               highest = curr.age
          }
          return acc
  })
}

console.log(oldestPersonName(people)); 
// Output: 'Naina'


//8
const peoples = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];

// const getAverageAge = (arr) => {
//      const avgAge = arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length
//      return {averageAge: avgAge}
// }

const getAverageAge = (arr) => {
     const averageAge = arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length
     return {averageAge}
}

console.log(getAverageAge(peoples));
// Output: { averageAge: 32.5 }


//9
const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 }
];

const findMostExpensiveProduct = (arr) => {
     let highest = arr[0].price * arr[0].quantity
     return arr.reduce((acc, curr) => {
          if ((curr.price * curr.quantity) > highest) {
               highest = curr.price * curr.quantity
               acc=curr
          }
          return acc
     },arr[0])
}

console.log(findMostExpensiveProduct(products)); 
// { name: "Slipper", price: 40, quantity: 3 }

//10
const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
const countStrings = (arr) => {
     return arr.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1
          return acc
     }, {})
}

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

















