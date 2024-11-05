//1

const incrementNumbers = (numbers) => numbers.map((number) => number + 3)

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]


//2
const capitalizeArray = (arr) => {
     return arr.map(item => item.toUpperCase())
}

const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

//3
const getAges = (arr) => {
 return arr.map(item => item.age)
}

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

//4
const getProductNamesInLowerCase = (arr) => {
  return arr.map((item) => item.name.toLowerCase())
}

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 }
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

//5
const getCityNames = (arr) => {
  return arr.map((item) => item.name)
}

const cities = [
  { name: 'New York', population: 8538000 },
  { name: 'Los Angeles', population: 3976000 },
  { name: 'Bangalore', population: 13608000 }
];

console.log(getCityNames(cities)); 
// Output: ["New York", "Los Angeles", "Bangalore"]


//6
const filterLongStrings = (arr) => {
  return arr.filter((item) => item.length > 5)
}

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits)); 
// Output: ["banana", "cherry", "watermelon", "pineapple"]

//7
const isDivisibleBy3and5 = (arr) => {
  return arr.filter((item) => item % 5 === 0 && item % 3 === 0)
}

const numberss = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numberss));
// Output: [30, 15]


//8
const filterByAge = (arr) => {
  return arr.filter((item) => item.age> 30)
}

const peoples = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
]

console.log(filterByAge(peoples)); 
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]


//9
const filterByScore = (arr) => {
  return arr.filter((item) => item.score > 80)
}


const students = [
  { name: 'Aditya', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 90 }
];

console.log(filterByScore(students)); 
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]


//10
const filterByCityAndAge = (arr) => {
  return arr.filter((item) => item.city === 'Indore')
}

const peopless = [
  { name: 'Ridhima', age: 75, city: 'Indore' },
  { name: 'Akshay', age: 60, city: 'Delhi' },
  { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' }
];
const filteredPeople = filterByCityAndAge(peopless);
console.log(filteredPeople); 
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//11
const filterByGenre = (arr,genre) => {
  return arr.filter((item) => item.genre === genre)
}


const books = [
  {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
  {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
  {title: "1984", author: "George Orwell", genre: "Science Fiction"},
  {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]


//12
const filterBySalary = (arr, salary,age) => {
  return arr.filter((item) => item.salary> salary && item.age>25)
}


const employees = [
  {name: "Abhay", age: 25, salary: 20000},
  {name: "Joice", age: 30, salary: 35000},
  {name: "Reena", age: 35, salary: 15000},
  {name: "Jeena", age: 40, salary: 50000}
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]