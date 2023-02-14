const startBtn = document.querySelector('#startQuiz');
const questionsDiv = document.querySelector('#questions');
const answersDiv = document.querySelector('#answers');
const scoresDiv = document.querySelector('#scores');
const timerDiv = document.querySelector('.timer');
const highscoreDiv = document.querySelector('.highscore');
const submitBtn = document.querySelector('.submit');

//Questions for the quiz
let questions = [
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

let score = 0;
let currentQuestion = 0;
let timeLeft = 60;

startBtn.addEventListener('click', startQuiz);
highscoreDiv.addEventListener('click', showHighscores);
submitBtn.addEventListener('click', saveHighscore);

function startQuiz() {
  startBtn.style.display = 'none';
  renderQuestion();
  setTimer();
}

function setTimer() {
    let timerInterval = setInterval(function() {
        timeLeft--;
        timerDiv.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0 || currentQuestion === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function renderQuestion() {
    let question = questions[currentQuestion];
    questionsDiv.textContent = question.question;
    answersDiv.innerHTML = '';
    question.answers.forEach(function(answer) {
        let btn = document.createElement('button');
        btn.textContent = answer;
        btn.addEventListener('click', selectAnswer);
        answersDiv.appendChild(btn);
    });
}

function setTimer() {
  let timerInterval = setInterval(function() {
      timeLeft--;
      timerDiv.textContent = `Time Left: ${timeLeft}`;
      if (timeLeft === 0 || currentQuestion === questions.length) {
          clearInterval(timerInterval);
      }
  }, 1000);
}

function renderQuestion() {
  let question = questions[currentQuestion];
  questionsDiv.textContent = question.question;
  answersDiv.innerHTML = '';
  question.answers.forEach(function(answer) {
      let btn = document.createElement('button');
      btn.textContent = answer;
      btn.addEventListener('click', selectAnswer);
      answersDiv.appendChild(btn);
  });
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
