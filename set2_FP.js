//1

const people = [
  { name: 'Raj', age: 28 },
  { name: 'Swapnil', age: 42 },
  { name: 'Anushka', age: 35 }
];

const names = people.map(person => person.name)


console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

//2

const numbers = [1, 2, 3, 4];
// Your code here
const multiplyByFive = numbers.map(num => num * 5)
console.log(multiplyByFive); // Output: [5, 10, 15, 20]


//3
const employeeData = [
    {name: "ram", dept: "marketer"}, 
    {name: "Radha", dept: "SDE"},
    {name: "shyam", dept: "finance professional"},
]

const greetEmployeeMessages = employeeData.map(
  (emp) => `Hi ${emp.name} we are glad to have you as a ${emp.dept}`
)

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketer', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']


//4
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
];

const getBookTitles = (books) => {
  return books.map(book => book.title)
}

const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//5

const studentNames = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const filteredNames = studentNames.filter((name) => name.startsWith("A"))

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//6


const productData = [
        {prodName: "Dairy Milk", price: 10},
        {prodName: "Dairy Milk Silk", price: 70},
        {prodName: "Five Star", price: 20},
        {prodName: "Mars", price: 50}
]
const getProducts = (products, price) => {
  return products.filter((product) => product.price > price)
}

console.log(getProducts(productData, 40))
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

//7

const numberss = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = numberss.find(num => num%7 ===0)
console.log(isDivisibleBy7)
// Output: 21

//8

const namess = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNamesGreaterThan8 = (names) => {
  return names.find((name) => name.length > 8)
}

console.log(isNamesGreaterThan8(namess));
// Output: "Geetanjali"


//9

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = (students) => {
  return students.find(student => student.grade === 'A');
};

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }

//10

const studentss = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
]

const findStudent = (students) => {
  return students.find(
    (student) => student.grade === "A" || student.scholarship
  )
}

const student = findStudent(studentss)
console.log(student) 


//11

function findStudent1(students) {
  return students.find(student => student.grade === "B" && student.scholarship);
}

const studentsss = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

const student1 = findStudent1(studentsss);
console.log(student1); // Output: { name: "Sarah", grade: "B", scholarship: true


//12

function filterClassicBollywoodMovies(movies) {
  const  moviesList= movies.filter(movie => movie.year < 1990 && movie.rating > 8.0)
    
    return moviesList.map((movie) => movie.title)
}

const bollywoodMovies = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmoha Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

const classicBollywoodTitles = filterClassicBollywoodMovies(bollywoodMovies);
console.log(classicBollywoodTitles); // Output: ['Sholay', 'Parinda']
























