//defining all the variables for the quiz
let countdownElement = document.getElementById("countdown");
let startQuizEl = document.getElementById("startQuiz");
let questionElement = document.getElementById("questions");
let answerCheckEl = document.getElementById("answerCheck");
let scoreEl = document.getElementById("score");
let highscoreEl = document.getElementById("highscore");
let initialsEl = document.getElementById("initials");
let submitEl = document.getElementById("submit");
let timeLeft = 60;
let quizScore = 100;
let index = 1;
let games = [];

//Questions for the quiz
let questionList = [
{   question: "How many bones are in the human body?",
    options: {
        1: "206",
        2: "300",
        3: "350",
    },
    correctAnswer: "206"
},
{   question: "What is the biggest planet in our solar system?",
    options: {
        1: "Jupiter",
        2: "Earth",
        3: "Pluto",
    },
    correctAnswer: "Jupiter"    
},
{   question: "How many teeth  does an adult human have?",
    options: {
        1: "32",
        2: "69",
        3: "20",
    },
    correctAnswer: "32"
},
{   question: "Which is the main gas that makes up the Earth's atmosphete?",
    options: {
        1: "Nitrogen",
        2: "Oxygen",
        3: "Carbon dioxide",
     },
     correctAnswer: "Nitrogen"
},
{   question: "Which is the main gas that makes up the Earth's atmosphete?",
    options: {
    1: "Nitrogen",
    2: "Oxygen",
    3: "Carbon dioxide",
    },
    correctAnswer: "Nitrogen"
}
];


//when the start button is clicked, the countdown will begin and the questions will be asked
startQuizEl.addEventListener("click", function () {
  countdown();
  renderQuestions(questionList[0]);
});

//This is so the game continues to ask questions as you complete each question until you get to the last one
questionElement.addEventListener("click", function(event) {
  if (index == 5) {
      alert("Thank you for Testing your JavaScript Knowledge, the game is over. Please submit your score and refresh the browser to try again");
  } else if (event.target.textContent != questionList[index - 1].correctAnswer) {
    timeLeft -= 10;
  } else {
    index++; 
    console.log(timeLeft);
    renderQuestions(questionList[index - 1]);
  }
});
//The User starts with 200 points and for each question he gets wrong, 20 is deducted
questionElement.addEventListener("click", function(event) {
  if (event.target.textContent === questionList[index - 1].correctAnswer) {
      quizScore += 20;
      scoreEl.textContent = "Your score = " + quizScore
  }else {
      quizScore -= 20;
      scoreEl.textContent = "Your score = " + quizScore
      setTimeout(questionList[index - 1]);
  }
});
 // Timer that counts down from 80 seconds
 function countdown() {
  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      countdownElement.textContent = timeLeft;
      timeLeft--;
    } else {
      alert("Time is Up");
      clearInterval(timeInterval);
    }
  }, 1000);
}
// This functions is used to start the quiz and so the viewer could see the questions on display
function renderQuestions(validQuestion) {
  questionElement.innerHTML = "";

  // creates the questions and options and then appends them to the screen. Saw a youtube video on how to do this
  let questionAsked = document.createElement("p");
  let optionsList = document.createElement("ol");
  let option1 = document.createElement("li");
  let option2 = document.createElement("li");
  let option3 = document.createElement("li");

  questionAsked.textContent = validQuestion.question;
  option1.textContent = validQuestion.options[1];
  option2.textContent = validQuestion.options[2];
  option3.textContent = validQuestion.options[3];


  questionElement.append(questionAsked);
  questionElement.append(optionsList);
  optionsList.append(option1);
  optionsList.append(option2);
  optionsList.append(option3);
}

// Setting up local storage to add highschore and initials to it.
  
submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  let game = {
    initials: initialsEl.value,
    score: quizScore,
  };
  games.push(game);
  privateData();
  renderTheGame();
});

function renderTheGame() {
  for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
    let highScores = document.createElement("li");
    highScores.textContent = games[i].initials + games[i].score;
    highscoreEl.append(highScores);
  }

  console.log(games.length);
}

function privateData() {
  console.log(games);
  localStorage.setItem("games", JSON.stringify(games));
}
function storeData() {
  let privateData = JSON.parse (localStorage.getItem("games"));
  if (privateData !== null) {
    games = privateData;
  }
}

storeData();
