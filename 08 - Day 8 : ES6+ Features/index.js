// Day 8: ES6+ Features

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
console.log('----------Task 1: Template Literals-----------')
let name = 'Sohail'
let age = 21
const str = `Heyy, My Name is ${name} and My Age is ${age}`
console.log(str)

// • Task 2: Create a multi-line string using template literals and log it to the console.
console.log('')
console.log('----------Task 2: Multiline Template Literals-----------')
hobby = 'To Code'
const multilineStr = `Hey
My Name Is : ${name}
My Age Is: ${21},
My Hobby is ${hobby}`
console.log(multilineStr)

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log('')
console.log('----------Task 3: Array Destructing-----------')
const fruits = ['apple', 'mango', 'banana', 'orange', 'grapes']
console.log(fruits)

let [firstElement, secondElement] = fruits
console.log(firstElement) // apple
console.log(secondElement) // mango

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
console.log('')
console.log('----------Task 4: Object Destructing-----------')
const book = {
  title: 'The Story of Tata',
  author: 'Peter Casey',
  year: 2023
}
console.log(book)

let {title, author} = book
console.log(title)
console.log(author)

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log('')
console.log('----------Task 5: Spread Operator-----------')
let veggies = ['tomato', 'potato', 'onion', 'spinach', 'cauliflower']

let shopping = [...fruits, ...veggies]
console.log(shopping)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log('')
console.log('----------Task 6: Rest Operator-----------')
const sumOfArbitraryNumber = (...theArgs) => {
  let sum = 0

  for (let arg of theArgs){
    sum += arg
  }
  return sum
}

console.log(sumOfArbitraryNumber(1,2,3)) // 6

console.log(sumOfArbitraryNumber(1,2,3,4)) // 10

console.log(sumOfArbitraryNumber(1,2,3,4,5,6,7,8,9,10)) // 55

// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.log('')
console.log('----------Task 7: Default Parameters-----------')
const productOfTwoNumbers = (num1, num2 = 1)=> {
  let product = num1 * num2
  return product
}

console.log(productOfTwoNumbers(12,2)) // 24
console.log(productOfTwoNumbers(12))  // 12

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log('')
console.log('----------Task 8: Enhanced Object Literals-----------')

let dogName = 'Boozo'
let dogAge = 3
let food = 'Pedigree'

const dog = {dogName, dogAge, food}
console.log(dog)

  

// Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log('')
console.log('----------Task 9: Computer Property Names Object-----------')

let propName1 = 'firstName'
let propName2 = 'lastName'
let propName3 = 'age'

const person = {
  [propName1]: 'Sohail',
  [propName2]: 'Shaikh',
  [propName3]: 21
}

console.log(person)