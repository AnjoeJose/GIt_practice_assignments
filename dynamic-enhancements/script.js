// script.js

// Function to change the background color of the body
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to display an alert message
function showAlert(message) {
    alert(message);
}

// Function to log a message to the console
function logMessage(message) {
    console.log(message);
}

// Function to toggle the visibility of an element
function toggleElementVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
