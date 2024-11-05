//1
const person = {
     name: "Ram",
     age: 30
}
person.age = 35

console.log(person.age)

//2
const isSportsCar = (car) => car.horsepower >= 300;

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//3

const person1 = { name: 'Ajay', age: 20 };

isEligible = (person, num) => {
     if (person.age + num > 21) return true
     else return false
}
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true

//4
const getViews = (blog) => blog.views > 1000;

const blog1 = { title: 'How to Learn JavaScript', author: 'John Doe', views: 1430 };
const blog2 = { title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500 };

console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

//5
let a = 1;
let b = 2;
[a, b] = [b,a]

console.log(a) // 2
console.log(b) // 1


//6
 add = (a = 30, b = 0) => a+b
console.log(add(2, 3))

//7
const obj1 = {a: 1, b: 2};
const obj2 = { c: 3, d: 4 };

combineObjects = () => ({...obj1, ...obj2})
const combinedObj = combineObjects(obj1, obj2)
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

//8

// getData = (personObj) => {
//   const { name, address : {city} } =  personObj
//   console.log(name) // John Doe
//   console.log(city) // New York
// }

getData = ({ name, address: { city } }) => {
    console.log(name) // John Doe
    console.log(city) // New York
}

const personObj = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
}
getData(personObj)

//9
stringToUpperCase = (string) => {
return string.toUpperCase()
}
console.log(stringToUpperCase("hello")); // "HELLO"


//10
// Your ES6 code here
const concatenateStrings = (str1, str2) => str1 + str2;

console.log(concatenateStrings("hello", "world")); // "helloworld"


//11
const lastElement = (arr) => arr[arr.length-1]
console.log(lastElement([1, 2, 3, 4, 5])); // 5


//12
const firstElement = (arr) => arr[0]
console.log(firstElement([1, 2, 3, 4, 5]))

//13
// Your ES6 code here
const sumFirstElement = (arr, num) => arr[0] + num;
console.log(sumFirstElement([1, 2, 3], 5)); // 6

//14

// Your ES6 code here
const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//15
const person3 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }

personInfo = (person) => {
     const { name, age, occupation } = person
     return `${name} is ${age} years old.`
}

console.log(personInfo(person3)) // Expected output: "John is 25 years old."
console.log(personInfo(person2)) // Expected output: "Jane is 45 years old."


