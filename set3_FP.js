//1

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
]
const findToyotaCar = (cars) => {
  return cars.find(car => car.make === 'Toyota' && car.year > 2010 )
}

const toyotaCar = findToyotaCar(cars)
console.log(toyotaCar)
// Output: { make: "Toyota", model: "Camry", year: 2015 }


//2
function getCarDetails(cars) {
  return cars.filter(car => car.year > 2012);
}

const carss = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCars = getCarDetails(carss);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]


//3
function findElectronicsProduct(products) {
  return products.find(product => product.category === "electronics");
}

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct); 
// Output: { name: "iPad", price: 799, category: "electronics" }

//4
function getAllElectronicProducts(products) {
  return products.filter(product => product.category === "electronics");
}

const productss = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const electronicProducts = getAllElectronicProducts(productss);
console.log(electronicProducts); 
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]


//5
function filterStudentsByGrade(students, minimumGrade) {
  return students.filter(student => student.grade > minimumGrade);
}

const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];

const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents); 
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]


//6
function findBookWithMoreThan500Pages(books) {
  return books.find(book => book.pageCount > 500);
}

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages); 
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }


//7
function getMaleCustomers(customers) {
  return customers.filter(customer => customer.gender === 'Male');
}

const customers = [
  { name: 'John', age: 25, gender: 'Male' },
  { name: 'Jane', age: 30, gender: 'Female' },
  { name: 'Bob', age: 40, gender: 'Male' },
  { name: 'Alice', age: 35, gender: 'Female' },
];

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers); 
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]


//8
const games = [
  {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
  {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
  {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
  {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
];

const filterByGenre = (arr, genre) => {
  return arr.filter(item => item.genre === genre)
}

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]


//9
const cars1 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (arr) => {
  return arr.filter(item => item.year > 2012).map(item => item.model)
}

const carModels = getCarModel(cars1);
console.log(carModels);
// Output: ["Camry", "Mustang"]


//10
function getTitlesWithMoreThan700Pages(books) {
  return books
    .filter(book => book.pageCount > 700)
    .map(book => book.title);
}

const bookss = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(bookss);
console.log(booksWithMoreThan700Pages); 
// Output: ["The Lord of the Rings"]


//11
const numbers = [12, 23, 4, 2, 11, 21] 

const sumOfEvenNumbers = (arr) => {
  return arr.reduce((acc,num)=> num % 2 === 0 ? acc+num : acc,0)
}

console.log(sumOfEvenNumbers(numbers))
// Output: 18


//12
function getAverageScore(students) {
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  return totalScore / students.length;
}

const studentsa = [
  { name: 'John', score: 80 },
  { name: 'Jane', score: 90 },
  { name: 'Bob', score: 75 },
  { name: 'Alice', score: 85 },
];

console.log(getAverageScore(studentsa)); 
// Output: 82.5


//13
function getTotalCost(products) {
  return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const products1 = [
  { name: 'Shirt', price: 20, quantity: 2 },
  { name: 'Pants', price: 30, quantity: 1 },
  { name: 'Shoes', price: 50, quantity: 1 },
  { name: 'Hat', price: 10, quantity: 3 },
];

console.log(getTotalCost(products1)); 
// Output: 150

//14
const strings = ['Hello', ' ', 'world', '!'];
const concatenateStrings = (arr) => {
  return arr.reduce((acc,curr) =>acc+curr ,"")
}

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"


const numbers3 = [10, 5, 8, 3, 6];

const getMinimumNumber = (arr) => {
  return arr.reduce((acc,curr)=>acc>curr ? acc=curr : acc ,arr[0])
}

console.log(getMinimumNumber(numbers3)); 
// Output: 3






