// Activity 1: If Else Statement
const prompt=require("prompt-sync")({sigint:true}); 
console.log('')
console.log('----------------Activity 1 : If Else Statement-----------------------')
// Task1: WAP to check if number is positive, negative or zero and log the result to the console
let num = prompt('Enter a Number: ');
num = Number(num)

if(num > 0){
    console.log('Positive')
} else if(num < 0){
    console.log('Negative')
} else {
    console.log('Zero')
}

// Task2: WAP to check if person is eligible to vote (age>= 18) and log the result to the console
let age = prompt('Enter Your Age: ')
age = Number(age)

if(age >= 18){
    console.log('Yes, You are Eligible')
} else{
    console.log('You are Not Eligible')
}

// Activity 2 : Nested if else statement
console.log('')
console.log('----------------Activity 2 : Nested If Else Statements-----------------------')
// Task 3: WAP to find the largest of three numbers using nested if else statements
let num1 = prompt('Enter 1st Number: ')
let num2 = prompt('Enter 2nd Number: ')
let num3 = prompt('Enter 3rd Number: ')

num1 = Number(num1)
num2 = Number(num2)
num3 = Number(num3)

let largest;

if(num1 >= num2 && num1 >= num3){
    largest = num1;
} else if(num2 >= num1 && num2 >= num3){
    largest = num2;
} else{
    largest = num3
}

console.log(`The Largest Number is ${largest}`)

// Activity 3: Switch Case
console.log('')
console.log('----------------Activity 3 : Switch Case-----------------------')
// Task 4: WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
let day = prompt('Enter Number of Day: ')
day = Number(day)

switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Invalid Day')
        break;
}

// Task 5: WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on the score log the grade to the console

let score = prompt('Enter Your Score: ')
score = Number(score)

switch (true) {
    case score > 100:
        console.log('Invalid Score')
        break;
    case score>=90:
        console.log('Grade A')
        break;
    case score>=80:
        console.log('Grade B')    
        break;
    case score>=70:
        console.log('Grade B')    
        break;
    case score>= 50:
        console.log('Grade D')
        break;
    default:
        console.log('Fail')
        break;
}

// Activity 4 : Conditional (Ternary) Operator
// WAP that uses TO to check if number is even or odd, and log the result to the console
console.log('')
console.log('----------------Activity 4 : Ternary Operator-----------------------')
let numToCheck = prompt('Enter a Number: ')

numToCheck = Number(numToCheck)

console.log(`Entered Number ${numToCheck} is ${numToCheck % 2 == 0 ? 'Even' : 'Odd'}`)

// Activity 5 : Combining conditions
// WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
console.log('')
console.log('----------------Activity 5: Combining Conditions-----------------------')
let year = prompt('Enter a Year: ')
year = Number(year)

if((year % 4 == 0 &&  year % 100 != 0) || year % 400 == 0){
    console.log('Leap Year')
} else {
    console.log('Not a Leap Year')
}