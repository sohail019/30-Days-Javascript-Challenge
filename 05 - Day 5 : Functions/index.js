const prompt=require("prompt-sync")({sigint:true}); 

// Activity 1 : Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console
console.log('----------------Task 1: Check Even or Odd---------------')

function isEven() {
    let num = prompt('Enter a Number: ')
    if(num % 2 == 0){
        console.log(`${num} is Even`)
    } else {
        console.log(`${num} is Odd`)
    }
}

isEven()

// Task 2: Write a function to calculate the square of a number and return the result
console.log('')
console.log('----------------Task 2: Square of a Number---------------')
let num = prompt('Enter a Number to Calculate a Square: ')
function squareOfANum(){
    return num*num
}
console.log(`Square of ${num} is ${squareOfANum()}`)

// Activity 2: Function Expression

// Task 3: Write a function expression to find a maximum of 2 number and log the result to the console
console.log('')
console.log('----------------Task 3: Find a Maximum of 2---------------')
const maxOfTwoNumbers = function() {
    let num1 = prompt('Enter 1st Number: ')
    let num2 = prompt('Enter 2nd Number: ')

    let max = num1 > num2 ? 'Num 1 is Maximum' : 'Num2 is Maximum'
    console.log(max)
}
maxOfTwoNumbers()

// Task 4: Write a function expression to concatenate two strings and return the result
console.log('')
console.log('----------------Task 4: Concatenation of 2 Strings---------------')
let str1 = prompt('Enter 1st String: ')
let str2 = prompt('Enter 2nd String: ')
const concatenateTwoStrings = function(){

    return str1 + str2
}
console.log(`Concatenation of ${str1} and ${str2} is ${concatenateTwoStrings()}`)

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
console.log('')
console.log('----------------Task 5: Calculate sum of 2 Numbers---------------')

let num1 = prompt('Enter 1st Number: ')
num1 = Number(num1)
let num2 = prompt('Enter 2nd Number: ')
num2 = Number(num2)
const sumOfTwoNumbers = () => {
    let sum = num1 + num2
    return sum
}
console.log(`Sum of ${num1} and ${num2} is ${sumOfTwoNumbers()}`)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
console.log('')
console.log('----------------Task 6: String contains specific character---------------')
let str = prompt('Enter a String: ')
let char = prompt('Enter a Char: ')
const checkSpecificChar = ()=> {
    return str.includes(char);    
}

console.log(checkSpecificChar())


// Activity 4: Function parameters and default values

// Task 7: Write a function that takes two parameters and return their product. Provide the default value for second parameter
console.log('')
console.log('----------------Task 7: Take Two Parameters and Return Product---------------')
const product = (num1, num2 = 10)=>{
    return num1 * num2
}
console.log(`Product is ${product(20)}`)


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for age.
console.log('')
console.log('----------------Task 8: Greeting Message---------------')
const greet = (name, age = 21)=> {
    return `Hello ${name}, Good Morning Your Age is ${age}`
} 
console.log(greet('Sohail'))

// Activity 5: Higher order functions

// Activity 9: Write a higher order function that takes a function and a number, and call the function that many times
console.log('')
console.log('----------------Task 9: Higher Order Function 1---------------')

const callfunctionMultipleTimes = (func, times) => {

    // loop to call the function `times` time
    for(let i = 0; i < times; i++){
        func() // call the provided function
    }
}
// Example function to be called
const hello = () =>{
    console.log('Hello')
}

callfunctionMultipleTimes(hello, 5)

// Activity 10: Write a higher order function that takes a two functions and a value, applies the first function to the value, and then applies the second function to the result
console.log('')
console.log('----------------Task 10: Higher Order Function 2---------------')

const applyFunctions = (func1, func2, value)=> {

    // Apply 1st Function to value
    const firstResult = func1(value)

    // Apply 2nd Function to result of the first function
    const finalResult = func2(firstResult)
    
    // return final result
    return finalResult
}

// Example functions
const double = (x) => x * 2
const square = (x) => x * x
const cube = (x) => x * x * x

// Call higher order function
const result1 = applyFunctions(double, square, 5) // this will first double the value(10), then square it (100)
console.log(result1) // Output: 100
const result2 = applyFunctions(double, cube, 2) // this will first double the value (4), the cube it (64)
console.log(result2) // Output: 64