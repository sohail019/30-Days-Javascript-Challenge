// Activity 1: For Loop

// Task 1 : WAP to print numbers from 1 to 10 using a for loop
console.log('-----------Task 1: 1 to 10------------------')
for (let i = 1; i <= 10; i++){
  console.log(i)
}

// Task 2 : WAP to print multiplication table of 5 using a for loop
console.log('-----------Task 2: Table of 5------------------')
for(let i = 1; i <= 10; i++){
  console.log(`${5} x ${i} = ${5*i}`)
}

// ------------------------------------------------------------
// Activity 2: While Loop

// Task 3 : WAP to calculate the sum of numbers from 1 to 10 using a while loop
console.log('------Task 3: Calculate sum of numbers from 1 to 10------------')

let sum = 0
let number = 1

while(number <= 10){
  sum += number;
  number++
}

console.log('The sum of Number from 1 to 10 is: ' + sum)

 // Task 4 : WAP to print numbers from 10 to 1 using a while loop
console.log('------Task 4: 10 to 1------------')
number = 10
while(number >= 1){
  console.log(number)
  number--
}


// Activity 3: Do... While Loop

// Task 5 : WAP to print numbers from 1 to 5 using a do... while loop
console.log('------Task 5: 1 to 5 using Do While------------')
number = 1
do{
  console.log(number)
  number++
} while(number <= 5)

// Task 6 : WAP to calculate the factorial of a number a do... while loop
console.log('------Task 6: Factorial of a Number------------')

// 5 * 4 * 3 * 2 * 1

number = 10
let fact = 1
let i = number
do{
  fact *= i;
  i--
} while( i >= 1)

console.log('Factorial of ' + number + ' is ' + fact)


// Activity 4: Nested Loop
// Task 7 : WAP to print a pattern using nested for loops
/* Pattern
*
* *
* * *
* * * *
* * * * *
*/

console.log('---------------Nested Loops-------------------')


for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* '; 
    }
    console.log(row);
}


// Activity 5 : Loop control statement

// Task 8: WAP to print numbers from 1 to 10, but skip the number 5 using continue statement
console.log('--------------Task 8 : Print 1 to 10 but skip 5------------')

for(let i = 1; i <= 10; i++){
  if(i == 5){
    continue
  }
  console.log(i)
}

// Task 9: WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement
console.log('-----------Task 9 : Print 1 to 10 but stop loop when number is 7----------')
 for(let i = 1; i <= 10; i++){
   if(i==7){
     break
   }
   console.log(i)
 }
