// Day 02 - Operators

// Activity 1: Arithmetic Operators
console.log('-------------Activity 1 : Arithmetic Operators--------------------')
// Task 1: WAP to add two numbers and log the result to the console
let num1 = 30
let num2 = 20
let sum = num1 + num2
console.log(`Sum of ${num1} and ${num2} is ${sum}`)

// Task 2: WAP to subtract two numbers and log the result to the console
let difference = num1 - num2
console.log(`Difference of ${num1} from ${num2} is ${difference}`)

// Task 3: WAP to multiply two numbers and log the result to the console
let product = num1 * num2
console.log(`Product of ${num1} and ${num2} is ${product}`)

// Task 4: WAP to add divide numbers and log the result to the console
let quotient = num1 / num2
console.log(`Quotient of ${num1} and ${num2} is ${quotient}`)
// Task 5: WAP to find the remainder when one number is divided by another and log the result to the console
let remainder = num1 % num2
console.log(`Remainder of ${num1} and ${num2} is ${remainder}`)

// -------------------------------------------------------------------

// Activity 2: Assignment Operators
console.log('-------------Activity 2 : Assignment Operators--------------------')
// Task 6 : Use the operator += to add a number to variable and log the result to the console
console.log(`Before Assigning: ${num1}`)
num1 += 10
console.log(`After Assigning: ${num1}`)
// Task 7 : Use the operator -= to subtract a number from variable and log the result to the console
console.log(`Before Assigning: ${num2}`)
num2 -= 10
console.log(`Before Assigning: ${num2}`)

// -----------------------------------------------------------------------

// Activity 3 : Comparison Operators
console.log('-------------Activity 3: Comparison Operators--------------------')
// Task 8 : WAP to compare two numbers using > and < and log the result to the console
console.log(`Num1 :: ${num1} is Greater than Num2 :: ${num2} : ${num1 > num2}`)
console.log(`Num2 :: ${num2} is Greater than Num1 :: ${num1} : ${num1 < num2}`)
// Task 9 : WAP to compare two numbers using >= and <= and log the result to the console
console.log(`Num1 :: ${num1} is Greater than equal to Num2 :: ${num2} : ${num1 >= num2}`)
console.log(`Num2 :: ${num2} is Greater than equal to Num1 :: ${num1} : ${num1 <= num2}`)
// Task 10 : WAP to compare two numbers using == and === and log the result to the console
num3 = 10
strNum = '10'
console.log(`Num :: ${num3} is Double Equal to String Num:: ${strNum} : ${num3 == strNum}`)
console.log(`Num :: ${num3} is Triple Equal to String Num:: ${strNum} : ${num3 === strNum}`)

// ----------------------------------------------------------------------------------

// Activity 4 : Logical Operators
console.log('-------------Activity 3 : Logical Operators--------------------')
// Task 11 : WAP that uses the && operator to combine two conditions and log the result to the console
// logic: print true if both are greater than equal to 10
console.log(num1 >= 10 && num2 >= 10) // true


// Task 12 : WAP that uses the || operator to combine two conditions and log the result to the console
// logic: print true if anyone is greater than equal to 20
console.log(num1 >= 20 && num2 >= 20) // false

// Task 13 : WAP that uses the ! operator to combine two conditions and log the result to the console
console.log(num1 != num2) // true
// ----------------------------------------------------------------------------------

// Activity 4 : Ternary Operators

// Task 14 : WAP that uses the ternary operator to check if a number is positive or negative and log the result to the console
console.log('-------------Activity 4: Ternary Operators--------------------')
let num = 10
check = num > 0 ? 'Positive' : 'Negative'
console.log(`Number is ${num}, so It is ${check}`)
num = -10
console.log(`Number is ${num}, so It is ${check}`)