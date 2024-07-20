// Day 7: Objects
// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log('-----------Task 1: Create an Object-------------')
const book = {
  title: "Don't be Sad",
  author: "Dr. Aid al-Qarni",
  year: 2011
}

console.log(book)

// Task 2: Access and log the title and author properties of the book object.

console.log('')
console.log('-----------Task 2: Access an Object-------------')
let title = book.title
let author = book.author
console.log(book.title)
console.log(book.author)
// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. 
console.log('')
console.log('-----------Task 3: Add a Method that returns a string-------------')

const printDetails = () => {
  return `Title of a Book is '${title}' and It is Written by '${author}'`
}

console.log(printDetails())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log('')
console.log('-----------Task 4: Update Year-------------')
const updateYear = (year) =>{
  book.year = year
  // return book
}
console.log(`Before Update Call: ${book.year}`)
updateYear(2020)
console.log(`After Update Call: ${book.year}`)

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

console.log('')
console.log('-----------Task 5: Create a Nested Objects-------------')

const library = {
  name: 'My Library',
  books: [
    {
      title: "Don't Be Sad",
      author: 'Dr. Aid al-Qarni',
      year: 2011
    },
    {
      title: 'Sealed Nectar',
      author: 'Safiur Rahman Mubarakpuri',
      year: 1976
    },
    {
      title: 'Reclaim Your Heart',
      author: 'Yasmin Mogahed',
      year: 2012
    }
  ]
}

console.log(library)
// Task 6: Access and log the name of the library and the titles of all the books in the library
console.log('')
console.log('-----------Task 6: Access Library-------------')
let libraryName = library.name
let titlesOfAllBooks = library.books.map(book => ` ${book.title}`)
console.log(`Library Name: ${libraryName}`)
console.log(`Titles of All Books in the library: ${titlesOfAllBooks}`)

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the books title and year and log the result of calling this method.


console.log('')
console.log('-----------Task 7: this Keyword-------------')
console.log(book)

function getBookDetails() {

  return `Book Title is ${this.title} and publication year is ${this.year}`
}

book.getDetails = getBookDetails;
  
console.log(book.getDetails())
// Activity 5: Object Iteration

// Task 8: Use a for in loop to iterate over the properties of the book object and log each property and its value.
console.log('')
console.log('-----------Task 8: For in loop-------------')
for (b in book){
  console.log(b + ' - ' + book[b])
}


// Task 9. Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('')
console.log('-----------Task 9: Object.keys and Object.values-------------')
const keys = Object.keys(book)
const values = Object.values(book)

console.log('Keys: ' + keys)
console.log('Values: ' + values)