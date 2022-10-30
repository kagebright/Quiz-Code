//defining all variables
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion()
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classLisst.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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
]


