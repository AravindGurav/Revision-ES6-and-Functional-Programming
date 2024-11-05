//1

isEligibleToVote = (age) => {
     if (age >= 18) {
     return "Eligible to vote"
     } else {
          return "Not eligible to vote"
}
}

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote

//2

isGreater = (num1, num2) => {
     if (num1 > num2) {
          return `${num1} is greater than ${num2}`
     } else {
          return `${num2} is greater than ${num1}`
     }
}

console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5


//3

const checkNum = (num) => num >= 0 ? "Positive Number" : "Negative Number";

console.log(checkNum(9)); // Positive Number
console.log(checkNum(-8)); // Negative Number
console.log(checkNum(22)); // Positive Number


//4
const isEvenOdd = (num) => num % 2 === 0 ? "Even Number" : "Odd Number";

console.log(isEvenOdd(5)); // Odd Number
console.log(isEvenOdd(8)); // Even Number
console.log(isEvenOdd(10)); // Even Number


//5

checkForAlphabetA = (name) =>  name.includes('a') ? "Includes a" : "Does not include a"


console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a


//6
const checkLength = (str) => str.length > 5 ? "more than 5 characters" : "less than 5 characters";

console.log(checkLength("Programming")); // more than 5 characters
console.log(checkLength("Jeep")); // less than 5 characters


//7
function isBetweenOneAndTen(num) {
     const limit1 = 1, limit2 = 10
     return num>= limit1 && num <=limit2 ?  "true" : "false"
}

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false


//8
const isHelloPresent = (str) => str.toLowerCase().includes("hello");

console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false


//9
const isMultipleOfThree = (num) => num % 3 === 0;

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true


//10
const multiplyByTen = (num) => num * 10;

console.log(multiplyByTen(20)); // 200
console.log(multiplyByTen(40)); // 400


//11
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
}

const { title, price, description } = product

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple


//12
const book = {
     title: "Harry Potter",
     author: "J K Rowling",
     pages: 123
}

 getBookDetails = (obj) => obj.pages>=100

console.log(getBookDetails(book)) // logs 'true' if the pages are above 100


//13
const person = { name: "Amit", age: 25, occupation: "Software Engineer" }

changeOccupation = (obj, newOccupation) => {
     obj.occupation = newOccupation
}
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console


//14
const numbers = [1, 2, 3];

const [a,b,c] = numbers

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console


//15
defaultParamsFunc = (a, b, c=4) => a * b * c

console.log(defaultParamsFunc(3, 1)); // 12
    console.log(defaultParamsFunc(3, 10)); // 120