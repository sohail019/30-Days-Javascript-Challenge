// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button1 = document.querySelector('.button1')

button1.addEventListener('click', ()=>{
  const para = document.querySelector('.button-para')

  para.textContent = 'Button Clicked'
})

// • Task 2: Add a double-click event listener to an image that toggles its visibility.


const toggleImage = document.querySelector('#toggleImg')

toggleImage.addEventListener('dblclick', function(){
  toggleImage.classList.toggle('hidden')
})

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color. 

const mouse = document.querySelector('#mouse')

mouse.addEventListener('mouseover', function(){
  mouse.style.backgroundColor = 'brown'
})


// Task 4: Add a mouseout event listener to an element that resets its background color.
mouse.addEventListener('mouseout', function(){
  mouse.style.backgroundColor = ''
})


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField1 = document.querySelector('#input1')

inputField1.addEventListener('keydown', function(e){
  const inputText = document.querySelector('.inputText')

  console.log('Key Pressed: ', e.key)
  inputText.textContent = `Key Pressed: ${e.key}`
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const inputField2 = document.querySelector('#input2')

inputField2.addEventListener('keyup', function(e){
  const displayText = document.querySelector('.displayText')

  displayText.textContent = `Current Value: ${inputField2.value}`
})

// Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const myForm = document.querySelector('#myForm')

myForm.addEventListener('submit', function(e){
  // prevent default form submission
  e.preventDefault();

  // create formData object  from the form elemnt
  const formData = new FormData(myForm)

  formData.forEach(function(value, key){
    console.log(`${key} : ${value}`)

    const displayData = document.createElement('p')

    displayData.textContent = `${key} : ${value}`
    myForm.appendChild(displayData)
  })
})


// • Task B: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const myFruit = document.querySelector('#myFruit')
const displayFruit = document.querySelector('#displayFruit')


myFruit.addEventListener('change', function(){
  displayFruit.textContent = `Selected Fruit: ${myFruit.value}`
})

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 

const myVeggies = document.querySelector('#myVeggies')

myVeggies.addEventListener('click', function(e){

  // check if the clicked element is the list item
  if(e.target && e.target.nodeName === 'LI'){
    // log the text content of the clicked item to the console
    console.log('Clicked Item Text: ', e.target.textContent)

    // display it in web also

    const displayVeggie = document.querySelector('#displayVeggie');

    displayVeggie.textContent = `Clicked Item Text: ${e.target.textContent}`
  }
})


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements

const myStationary = document.querySelector('#myStationary')

const addItemBtn = document.querySelector('#addItem')

// Add click event listener to parent element
myStationary.addEventListener('click', function(e){

  const displayItem = document.querySelector('#displayItem')
  // check clicked event is list item
  if(e.target && e.target.classList.contains('item')){
    // log the text content of the clicked item to the console
    console.log('Selected Item from Stationary: ', e.target.textContent)

    displayItem.textContent = `Selected Item From Stationary: ${e.target.textContent}`


    // Function to add a new list item
    const addItem = ()=> {
      let newItem = document.createElement('div')

      newItem.classList.add('item')

      newItem.textContent = 'Item ' + (myStationary.children.length + 1)

      myStationary.appendChild(newItem)
    }

    // add a click event listener to the add new items button
    addItemBtn.addEventListener('click', addItem)
  }
})