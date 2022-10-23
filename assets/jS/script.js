const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion()
}

function selectAnswer() {

}

const questions = [
    {
        question: 'How many bones are in the human body?', ''
        answers: [
            { text: '206', correct: true },
            { text: '300', correct: false }
        ]
    }
]

