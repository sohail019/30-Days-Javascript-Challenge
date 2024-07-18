// // Day 6: Arrays

const { accessSync } = require("fs")
const { eventNames } = require("process")

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log('--------Task 1: Create an Array-------')
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
// Task 2: Access the first and last elements of the array and log them to the console.
console.log('')
console.log('--------Task 2: Access 1st and last elements-------')
let firstElement = numbers[0]
let lastElement = numbers[numbers.length - 1]
console.log(`First Element: ${firstElement} - Last Element: ${lastElement}`)

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log('')
console.log('--------Task 3: Push Method-------')
numbers.push(10)
console.log(numbers)

// Task 4: Use the pop method to remove the last element from the array and log the updated array. 
console.log('')
console.log('--------Task 4: Pop Method-------')
numbers.pop()
console.log(numbers)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log('')
console.log('--------Task 5: Shift Method-------')
numbers.shift()
console.log(numbers)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log('')
console.log('--------Task 6: Unshift Method-------')
numbers.unshift(1)
console.log(numbers)

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

console.log('')
console.log('--------Task 7: Map Method-------')

doubleNumbers = numbers.map( num => num * 2)

console.log(doubleNumbers)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array. 
console.log('')
console.log('--------Task 8: Filter Method-------')

const newNumbers = [11,22,33,44,55,66,77,88,99]
const evenNumbers = newNumbers.filter( num => num % 2 == 0)

console.log(evenNumbers)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

console.log('')
console.log('--------Task 9: Reduce Method-------')

numbers = [1,2,3,4,5,6,7,8,9,10]

const sumOfNumbers = numbers.reduce( (acc, curr) => acc + curr, 0)

console.log(`Sum of Numbers is ${sumOfNumbers}`)

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('')
console.log('--------Task 10: For Loop-------')

let fruits = ['apple', 'mango', 'banana', 'orange', 'grapes']

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('')
console.log('--------Task 11: forEach Method-------')
let veggies = ['potato', 'tomato', 'brinjal', 'lady finger', 'brocolli']

veggies.forEach(veggie => console.log(veggie))

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log('')
console.log('--------Task 12: 2D Array-------')
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matrix)

// Task 13: Access and log a specific element from the two-dimensional array.
console.log('')
console.log('--------Task 13: Access and Log 2D Array-------')
const firstRow = matrix[0]
console.log(firstRow)

let lastRow = matrix[matrix.length - 1]
console.log(lastRow)

let firstRowSecondElement = matrix[0][1]
console.log(firstRowSecondElement)