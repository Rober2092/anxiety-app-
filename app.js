// Select the quiz form element
const quizForm = document.querySelector("#quiz-form");

// Add an event listener to the form to listen for a submit event
quizForm.addEventListener("submit", function(e) {
  // Prevent the form from submitting and refreshing the page
  e.preventDefault();

  // Initialize a variable to store the user's score
  let score = 0;

  // Get all of the radio buttons in the form
  const radioButtons = quizForm.querySelectorAll("input[type='radio']");

  // Loop through the radio buttons
  for (let i = 0; i < radioButtons.length; i++) {
    // Check if the current radio button is checked
    if (radioButtons[i].checked) {
      // If it is checked, increment the score by 1
      score++;
    }
  }

  // Create a message to display to the user based on their score
  let message;
  if (score <= 2) {
    message = "You may have anxiety. It's important to seek help from a professional.";
  } else if (score <= 4) {
    message = "You may be experiencing some anxiety symptoms. It's important to take care of yourself and consider seeking help.";
  } else {
    message = "You may not have severe anxiety symptoms. However, it's important to always take care of yourself and your mental health.";
  }

  // Select the quiz result element
  const quizResult = document.querySelector("#quiz-result");

  // Update the quiz result element with the message
  quizResult.textContent = message;
  
  // Show the quiz result element
  quizResult.style.display = "block";
  
  // Add a button for the user to retake the quiz
  const retakeButton = document.createElement("button");
  retakeButton.textContent = "Retake Quiz";
  retakeButton.classList.add("btn");
  retakeButton.classList.add("btn-primary");
  
  // Add an event listener to the retake button to listen for a click event
  retakeButton.addEventListener("click", function() {
    // Loop through the radio buttons and uncheck them
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
    // Hide the quiz result element
    quizResult.style.display = "none";
    // Remove the retake button
    retakeButton.remove();
  });
  
  // Append the retake button to the quiz form
  quizForm.appendChild(retakeButton);
});
console.log("app.js loaded");
