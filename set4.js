//1
// Your ES6 code here

// const getMaxElement = (arr) => {
//   return Math.max(...arr)
// }


const getMaxElement = (arr) => {
     let max=0
     for (let i = 0; i < arr.length; i++){
          if (arr[i] > max) {
               max=arr[i]
          } 
     }
     return max
}
let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array)) // 78

//2
const calculateAverage = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3


//3

const convertEvenToOdd = (arr) => {
  return arr.map((num) => (num % 2 === 0 ? num + 1 : num))
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]



//4
const filterWords = (words) => {
  return words.filter((word) => word.length > 5)
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]


//5
const capitalizeWords = (words) => {
  return words.map((word) => word.toUpperCase())
}

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]


//6

const getValues = (arr) => {
     return arr.map(item => item.name)
}

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]


// 7 // Your ES6 code here

const podAndTeamAllocation = (obj) => {
     return { firstName: obj.firstName, lastName: obj.lastName, teamId: Math.floor(Math.random() * 1000000) }
}

const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}


//8

const checkForTeam = (student) => {
     if (!student.team) {
     student.team = 'A'
     }
     return student
}

console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: 'A'}

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// {firstName: 'John', lastName: 'Dee', team: 'B'}

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: 'A'}



//9

const book = { 
        title: 'JavaScript: The Definitive Guide',  
        authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
        publisher: {name: 'OReilly Media', location: 'CA'}
};

const { title, authors: [{ name: author1 }, { name: author2 }], publisher: { name: publisherName } } = book

// Your ES6 code here

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan 
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

//10

const sumOfAges = (arr) => {
     const sum = arr.reduce((acc, item) => {
          return acc + item.age
     }, 0)
     return sum
}
var arrayy = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];

console.log(sumOfAges(arrayy)); // 121

