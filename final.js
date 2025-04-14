
// This script handles the "Learn More" button functionality using plain JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with the class "learn-more-btn"
  const buttons = document.querySelectorAll(".learn-more-btn");

  // Loop through each button and attach a click event listener
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thanks for your interest! More info coming soon.");
    });
  });
});
