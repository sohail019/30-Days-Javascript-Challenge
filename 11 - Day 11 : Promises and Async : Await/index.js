// Day 11: Promises and Async/Await

const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("dns");

// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve) => {

  setTimeout( () => {
    resolve("Promise resolved after 2 Seconds")
  }, 2000)
});

myPromise.then((message) => {
  console.log(message)
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

const myAnotherPromise = new Promise((rejects) => {

  setTimeout( () => {
    rejects("Promise Rejects after 2 Seconds")
  }, 4000)
});

myAnotherPromise.then((message) => {
  console.log(message)
})

// Activity 2: Chaining Promises

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// simulate a server request with a promise
function fetchData(data, delay){
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`)
    }, delay)
  });
}


// chain promise to log messages in a specific order
fetchData("Data 1", 1000).then((message) => {
  console.log(message); // log the first message
  return fetchData("Data 2", 2000); // return the second promise
})
.then((message2) => {
  console.log(message2); // log the second message
  return fetchData("Data 3", 1500) // return the third promise
})
.then((message3) => {
  console.log(message3); // log the third message
  console.log("All Data Fetched") // final log after all promises are resolved
})
.catch((error) => {
  console.log("Error Fetching Data: ", error) // handle any error
})



// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. 

// Define an async function

async function logData(){
  try{
    // wait for the promise to resolve
    const result = await fetchData("data", 2000);
    // log the resolved value
     console.log(result)
  } catch(error){
    // Handle any error:
    console.log("Error:", error)
  }
}

logData()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetchDataWithError(data, delay){
  return new Promise((resolve, rejects) => {
    setTimeout( () => {
      rejects(`Error Fetching ${data}`)
    }, delay)
  })
}

// define async function to handle rejected promise
async function handleRejectedPromise(){
  try{
    const result = await fetchDataWithError("Data", 6000);
    console.log(result)
  } catch(error){
    console.log("Caught an Error:", error)
  }
}

handleRejectedPromise()

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// define the url of the public api
const apiURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

// use the fetch api to get the data from public url
setTimeout( () => {
  
fetch(apiURL)
  .then((response) => {
    // check if response is succesful
    if (!response.ok){
      throw new Error(`HTTP Error! Status ${response.status}`)
    }
    // convert the response to JSON
    return response.json()
  })
  .then((data) => {
    // Log the response data to the console
    console.log("Bitcoin Price Index: ", data)
  })
  .catch((error) => {
    // handle any errror
    console.log("Error Fetching Data", error)
  })
}, 8000)


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// Define the async function to fetch data
async function fetchBitcoinPrice() {
    // Define the URL of the public API
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    try {
        // Use fetch to get the response and wait for it
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert the response to JSON and wait for it
        const data = await response.json();

        // Log the response data to the console
        console.log("Bitcoin Price Index:", data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchBitcoinPrice();


// Activity 5: Concurrent Promises

// Task 8: Use Promise all to wait for multiple promises to resolve and then log all their values.

// create multiple promises
const promise1 = fetchData("Data 10", 10000)
const promise2 = fetchData("Data 11", 12000)
const promise3 = fetchData("Data 12", 11000)

// use promise all
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All Promise Resolved", values)
  })
  .catch( (error) => {
    console.log("Error in Promise:",  error)
  })

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

// Use Promise.race to wait for the first promise to resolve or reject
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        // Log the value of the first promise that resolves
        console.log("First promise resolved with:", value);
    })
    .catch((error) => {
        // Handle any errors if any promise is rejected
        console.error("Error in promises:", error);
    });