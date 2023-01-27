// Get the quiz form element
const quizForm = document.getElementById("quiz-form");

// Handle the form submit event
quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Initialize the score and the number of questions
  let score = 0;
  let numQuestions = 12;
  
  // Get all the radio buttons
  let radioButtons = document.querySelectorAll("input[type='radio']");
  
  // Loop through the radio buttons and check if they are checked
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      if (radioButtons[i].value === "yes") {
        score++;
      }
    }
  }
  
  // Calculate the percentage score
  let percentage = (score / numQuestions) * 100;
  
  // Show the results in the results div
  document.getElementById("results").innerHTML =
    "Your score is " + percentage + "%";
});
// Get the progress bar element
const progressBar = document.getElementById("progress-bar");

// Get the number of questions in the quiz
const numQuestions = 12;

// Initialize the current question number
let currentQuestion = 1;

// Handle the form submit event
quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Update the progress bar width
  progressBar.style.width = (currentQuestion / numQuestions) * 100 + "%";
  
  // Increment the current question number
  currentQuestion++;
  
  // Check if the user has completed the quiz
  if (currentQuestion > numQuestions) {
    // Show the results
    // ...
  }
});
const resources = [
  {
      name: "Anxiety and Depression Association of America",
      url: "https://adaa.org/",
  },
  {
      name: "National Institute of Mental Health",
      url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml",
  },
  {
      name: "Anxiety UK",
      url: "https://www.anxietyuk.org.uk/",
  },
  {
      name: "Anxiety and Depression Society of America",
      url: "https://www.adaa.org/",
  },
  {
      name: "National Alliance on Mental Illness",
      url: "https://www.nami.org/Home/Mental-Health-Conditions/Anxiety-Disorders",
  }
];

// Get the resources list element
const resourcesList = document.getElementById("resources-list");

// Loop through the resources array and create list items for each resource
for (let i = 0; i < resources.length; i++) {
  const resource = resources[i];
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = resource.url;
  link.innerHTML = resource.name;
  item.appendChild(link);
  resourcesList.appendChild(item);
}
