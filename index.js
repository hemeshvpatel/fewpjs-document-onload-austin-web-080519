// Your code goes here

// Code your solution in index.js. First, set up a DOMContentLoaded event in order 
// to detect when the HTML page has loaded, and the document is ready to be manipulated. 
// Use the event's callback function to target the paragraph element with id="text" and 
// replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#text').textContent = "This is really cool!"
});