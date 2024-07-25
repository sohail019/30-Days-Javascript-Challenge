// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
console.log("--------------Task 1: Try Catch -----------------")
function throwErrorFunc(){
  throw new Error("This is an intentional error")
}

// use try catch to handle the error
try{
  // call the function that throws an error
  console.log(throwErrorFunc())
} catch (err){
  // log an appropriate message to the console
  console.log("An Error Occured:", err.message)
}


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
console.log("")
console.log("--------------Task 2: Throws Error when divide-----------------")

const divideNumbers = function(num, den){

  // check if den is zero
  if(den === 0){
    // Throw an error if the denominator is zero
    throw new Error("Division by Zero is Not Allowed")
  }

  // return the result of the division
  return num / den
}

// use try-catch to handle the error
try{
  // call the function with valid denominator
  let result = divideNumbers(10, 2)
  console.log("Result: ", result)

  // Call the function with a denominator of zero
  result = divideNumbers(10, 0);
  console.log("Result:", result);
} catch(err){
  console.log("An Error Occured:: ", err.message)
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
console.log("")
console.log("--------------Task 3: try-catch and finally block-----------------")
// Function to demonstrate try-catch-finally
function executeTryCatchFinally() {
    try {
        // Code that might throw an error
        console.log("Inside try block");
        // Intentionally throw an error for demonstration
        throw new Error("This is a test error");
    } catch (error) {
        // Handle the error
        console.error("Inside catch block:", error.message);
    } finally {
        // Code that will always execute
        console.log("Inside finally block");
    }
}

// Call the function
executeTryCatchFinally();

// Activity 3: Custom Error Objects


// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try- catch block.

console.log("")
console.log("--------------Task 4: Custom Error Class-----------------")

class CustomError extends Error{
  constructor(message){
    super(message)
    this.name = "Custom Error"
  }
}

// Function that throws an instance of the custom error
function throwErrorFunction() {
    throw new CustomError("This is a custom error");
}

// Use try-catch to handle the custom error
try {
    // Call the function that throws the custom error
    throwErrorFunction();
} catch (error) {
    // Check if the error is an instance of CustomError
    if (error instanceof CustomError) {
        // Handle the custom error
        console.error("Caught a custom error:", error.message);
    } else {
        // Handle other types of errors
        console.error("Caught an unexpected error:", error);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// Custom error class extending the built-in Error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Function to validate user input
function validateInput(input) {
    // Check if the input is an empty string
    if (input.trim() === "") {
        // Throw a custom error if validation fails
        throw new ValidationError("Input cannot be empty");
    }
    // Return the input if validation passes
    return input;
}

// Use try-catch to handle the custom error
try {
    // Example with valid input
    let userInput = "Valid input";
    console.log("User input:", validateInput(userInput));

    // Example with invalid input (empty string)
    userInput = "  "; // Intentionally empty
    console.log("User input:", validateInput(userInput));
} catch (error) {
    // Check if the error is an instance of ValidationError
    if (error instanceof ValidationError) {
        // Handle the validation error
        console.error("Validation error:", error.message);
    } else {
        // Handle other types of errors
        console.error("Unexpected error:", error);
    }
}


// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// Function to create a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        // Generate a random number between 0 and 1
        const randomValue = Math.random();

        // Check if the random number is less than 0.5
        if (randomValue < 0.5) {
            // Resolve the promise
            resolve("Promise resolved successfully!");
        } else {
            // Reject the promise
            reject("Promise rejected!");
        }
    });
}

// Use the promise and handle its resolution or rejection
randomPromise()
    .then((message) => {
        // Handle the resolved promise
        console.log(message);
    })
    .catch((error) => {
        // Handle the rejected promise
        console.error("Error:", error);
    });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// Function to create a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    });
}

// Async function to handle the promise with try-catch
async function handleRandomPromise() {
    try {
        // Await the promise's resolution or rejection
        const message = await randomPromise();
        // Log the success message if the promise resolves
        console.log(message);
    } catch (error) {
        // Handle the error if the promise is rejected
        console.error("Error:", error);
    }
}

// Call the async function
handleRandomPromise();


// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.

// Make a fetch request to an invalid URL
fetch('https://invalid-url.com/data')
    .then((response) => {
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then((data) => {
        // Log the data if the request is successful
        console.log('Data:', data);
    })
    .catch((error) => {
        // Log an error message if the request fails
        console.error('Fetch error:', error.message);
    });


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.


// Define an async function to make a fetch request
async function fetchData() {
    try {
        // Make a fetch request to an invalid URL and await the response
        const response = await fetch('https://invalid-url.com/data');

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log the data if the request is successful
        console.log('Data:', data);
    } catch (error) {
        // Log an error message if the request fails
        console.error('Fetch error:', error.message);
    }
}

// Call the async function
fetchData();