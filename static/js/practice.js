var isOld = true;
let fullName = "Homer Simpson";

let country = "United States";

let age = 26;

let hourlyWage = 15;

let weeklyWage = parseInt(weeklyHours);

let message = () => 'Hello World';

let message = (a) => 'Hello $(a)';
    

console.log("Hello, $(fullName")

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listloop(userList) {
    for (var i = 0 < userList.length, i ++) {
        console.log(userList(i));
    }
}

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

function vegloop(myVeggies) {
    for (var i = 0 < myVeggies.length; i++) {
        console.log(myVeggies[i]);
    }
}

function printString(word) {
    console.log("Michal");
}
/// CLASS NOTES - 12/2/21
// Initialize the function
// function somename(someparamter)
function countWords(sentence);

  // Convert string to an array of words
    // use string.split(" ")
  const words = sentence.split(" ")

  // An object to hold word frequency
   // an empty object can be created like this:
   //  const myNewObject = {}
const wordFrequency = {}

  // Iterate through the array and count the occurrence of each word
  //  either a for loop
  // or a forEach call
  for (let i = 0; i < words.length; i++) {
      if (wordFrequency[theCurrentWord]) {

      }
  }

  // check if we already have the word

  // if we do, then increase the count by 1

  // otherwise... start keeping track of the word, and 
  //  make its count 1


//  Call the function with the string as a parameter.
// console.log(somename ("I yam what I yam and always will be what I yam"))
// console.log(somename("I am Henry VIII I am Henry VIII I am I am yam"))


// Getting a reference to the button on the page with the id property set to `click-me`
var button1 = d3.select("#click-me1");
var button2 = d3.select("#click-me2");
var button3 = d3.select("#click-me3");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("Hi, button1 was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button1.on("click", handleClick);

// You can also define the click handler inline
button2.on("click", function() {
  console.log("Hi, button2 was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button3.on("click", function() {
  console.log("Hi, button3 was clicked!");
  console.log(d3.event.target);
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});

// grab references to the input element and the output div
// @TODO: YOUR CODE HERE

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Function to handle input change
  function handleChange(event) {
    // grab the value of the input field
    // @TODO: YOUR CODE HERE
  
    // clear the existing output
    // @TODO: YOUR CODE HERE
  
    // reverse the input string
    // @TODO: YOUR CODE HERE
  
    // Set the output text to the reversed input string
    // @TODO: YOUR CODE HERE
  }
  
  // Attach an event to detect changes to the input field.
  // @TODO: YOUR CODE HERE
  
