//1
formatArray = (items) => {
     const length = items.length
     const first = items[0]
     const last = items[length - 1]
     
     return `The array has ${length} items, and the first item is ${first}, and the last item is ${last}.`
}

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// Output: The array has 3 items, and the first item is "apple", and the last item is "orange".

//2
const product = {
  name: 'Socks',
  price: 249,
  inStock: true,
};

formatProduct = (product) => {
     const { name, price, inStock } = product
     
     return `${name} costs INR ${price} and is ${inStock ? "in stock": "out of stock"}`
}

const message1 = formatProduct(product);
console.log(message1);
// Output: Socks costs INR 249 and is in stock.


//3

// findPerson = (arr, nameMatch) => {
//      for(const item of arr) {
//           if (item.name === nameMatch)
//                return item
//      }
//      return null
// }


findPerson = (arr, nameMatch) => {
     const person = arr.find(item => item.name === nameMatch) || null
     return person
}

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
)

//4
// pickFirstAndSecond = (arr) => {
//      const [first, second] = arr
//      return `{first: ${first}, second: ${second}}`
// }

pickFirstAndSecond = ([firstt, secondd]) => ({first: firstt, second: secondd})


console.log(pickFirstAndSecond(["grapes", "banana", "apple"]))
// {first: 'grapes', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}

//5
startsWithA = (str) => str.charAt(0) === 'A'

console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"))
// false


//6
const printFirstCharacter = (arr) => arr[0];

console.log(printFirstCharacter([1, 2, 3, 5, 8])); // 1


//7
const printLastFive = (arr) => {
return arr.splice(arr.length-5)
}

// const printLastFive = (arr) => arr.slice(arr.length-5)

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]



//8
const printSecondCharacter = (arr) =>arr[1]*20
console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40


//9 Your ES6 code here

const sayHello = (arr) => {
return `Hello ${arr[1]}`
}

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh


//10
// Your ES6 code here
// const sumOfEvenIndices = (arr) => {
//   let i=0, sum=0
//   arr.forEach(element => {
    
//     if (i % 2 == 0) {
//       sum+=element
//     }
    
//   });
//   return sum
// }

const sumOfEvenIndices = (arr) => {
  const sum = arr.reduce((acc, item, index) => 
    index % 2 === 0 ? acc+item : acc
  , 0)

  return sum
}

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30


//11// Your ES6 code here
const sumFirstTwoElements = (arr) => arr[0]+arr[1]

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

//12// Your ES6 code here
//use array .find or forin loop
const printMultipleOfFive = (arr) => arr.find(item => item % 5 ===0 )

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5


//13// Your ES6 code here

const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}

const getAddress = (userData) => {
  return { postalCode: userData.postalCode, city: userData.city }
}

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}



//14

const printData = (userData) => {
  return `${userData.name} lives in ${userData.country}`
}

const userData1 = {
  name: 'Gaurav',
  postalCode: '12134',
  country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: 'Pritam',
  postalCode: '560223',
  country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India


//15
const printProductDetails = (product) => {
  const {
    name,
    specification: { size, capacity },
    price,
  } = product
  return `${name} which is of ${size}, has a capacity of ${capacity}.`
}
