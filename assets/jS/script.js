//defining all variables
const startElement = document.getElementById("start")
const nextButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const countdownElement = document.getElementById("countdown");
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");
const initialsEl = getElementById("initials");
let timeLeft = 60;
let quizScore = 100;
let index = 1;
let games = 1;

//Questions for the quiz
const questions = [
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

//code for the countdown when the start button is clicked
startButton.addEventListener("click", function () {
    countdownElement();
    renderQuestions(questions[0]);
});

//continuation of the quiz after each question
questionElement.addEventListener("click", function(event) {
    if (index == 5) {
        alert("Thank you for participating! Game Over! Please submit your and try again");
    } else if (event.target.textContent != questions[index - 1].correctAnswer) {
        timeLeft -=10;
    } else {
        index++;
        console.log(timeLeft);
        renderQuestions(questions[index - 1]);
    }
});

//100 points system, 20 points per question
questionElement.addEventListener("click",function(event) {
   if (event.target.textConttent === questions[index -1].correctAnswer) {
    quizScore += 20;
    scoreElement.textContent = "Your score = " + quizScore;
   } else {
    quizScore -= 20;
    scoreElement.textContent = "Your score = " + quizScore;
    setTimeout(questions[index - 1]);
} 
});

//60 seconds countdown
function countdown() {
    let timeInterval = setInterval(function() {
        if (timeLeft >1) {
            countdownElement.textContent = timeLeft;
            timeLeft--;
        } else {
            alert("Time's Up!");
            clearInterval(timeInterval);
        }
    }, 1000);
}

function renderQuestions(validQuestion) {
    questionElement.innerHTML = "";
  
    // creates the questions and options and then appends them to the screen. Saw a youtube video on how to do this
    let questionAsked = document.createElement("p");
    let optionsList = document.createElement("ol");
    let option1 = document.createElement("li");
    let option2 = document.createElement("li");
    let option3 = document.createElement("li");
    let option4 = document.createElement("li");
  
    questionAsked.textContent = validQuestion.question;
    option1.textContent = validQuestion.options[1];
    option2.textContent = validQuestion.options[2];
    option3.textContent = validQuestion.options[3];
    option4.textContent = validQuestion.options[4];
  
    questionElement.append(questionAsked);
    questionElement.append(optionsList);
    optionsList.append(option1);
    optionsList.append(option2);
    optionsList.append(option3);
    optionsList.append(option4);
  }
  
  // Setting up local storage for highscores and storage
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
