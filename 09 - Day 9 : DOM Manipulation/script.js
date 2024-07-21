// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content. 

const heading = document.getElementById('heading')

heading.textContent = 'Hello Sohail'

// Task 2: Select an HTML element by its class and change its background color.

const boxHeading = document.querySelector('.boxHeading')

boxHeading.style.backgroundColor = 'red'

const boxes = document.querySelectorAll('.box')

boxes.forEach( box => {
  box.style.backgroundColor = 'green'
})

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

const newDiv = document.createElement('div')

newDiv.textContent = 'Created new Div element with some text content'

document.body.appendChild(newDiv)

// Task 4: Create a new li element and add it to an existing ul list.

const newLi = document.createElement('li')

newLi.textContent = 'Sparrow'

document.querySelector('ul').appendChild(newLi)

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

const unwantedPara = document.querySelector('.unwanted-para')

unwantedPara.remove()

// Task 6: Remove the last child of a specific HTML element.

const lastElement = document.querySelector('ul')

lastElement.lastElementChild.remove() // sparrow remove

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

let jsImage = document.getElementById('js-image');

jsImage.src = 'https://jrgonzalez.es/wp-content/uploads/2021/05/javascript-tips.jpg';



// Task 8: Add and remove a CSS class to/from an HTML element.

const h4 = document.querySelector('h4')

h4.classList.add = 'heading-4'

h4.classList.remove()

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.querySelector('button')

button.addEventListener('click', ()=>{
  const para = document.querySelector('.buttonP')

  para.textContent = 'Button clicked'
})

// Task 10: Add a mouseover event listener to an element that changes its border color

const mouse = document.querySelector('.mouse')

mouse.addEventListener('mouseover', ()=>{
  
  mouse.style.borderColor = 'brown'
  mouse.addEventListener('mouseout', ()=>{
    mouse.style.borderColor = ''
  })
})

