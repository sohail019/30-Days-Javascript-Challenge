// Activity 1: Variable Declaration

// Task 1 : Declare a variable using var, assign it a number and log the value to the console
var num = 10;
console.log(num)

// Task 2 : Declare a variable using let, assign it a string and log the value to the console
let str = 'Chaiaurcode javascript challenge'
console.log(str)


// Activity 2: Constant Declaration

// Task 3 : Declare a variable using const, assign it a boolean value and log the value to the console
const isChallengeCompleted = false
console.log(isChallengeCompleted)

// Activity 3 : Data Types

// Task 4 : Create variables of different data types (number, string, boolean, object, arrays) and log each variable's type using typeof operator

let age = 21
let name = 'Sohail Shaikh'
let isMarried = false
let myInfo = {
    'name': 'sohail',
    'age': 21,
    'challenge': '30 Days JS Challenge',
    'organizer': 'Hitesh Sir'
}
let programmingLanguages = ['javascript', 'java', 'python', 'C++']

console.log(age, typeof(age))
console.log(name, typeof(name))
console.log(isMarried, typeof(isMarried))
console.log(myInfo, typeof(myInfo))
console.log(programmingLanguages, typeof(programmingLanguages))

// Activity 4 : Reassigning Values

// Task 5 : Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console
let  fullName= 'Sohail Shaikh'
console.log(fullName)

fullName = 'Sohail Anwar Shaikh'
console.log(fullName)

// Activity  5: Understanding const

// Task 6 : Try reassigning a variable declared with const and observe the error
const myFavouriteFruit = 'Watermelon'
console.log(myFavouriteFruit)
myFavouriteFruit = 'Banana' // TypeError: Assignment to constant variable.
consol.log(myFavouriteFruit) 
