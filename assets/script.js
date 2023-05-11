// Function to start quiz when the "start quiz button is clicked"
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const choices = document.getElementById("choices");
const question = document.getElementById("question")
const submitButton = document.getElementById("submit-btn");
// Defines the array of quiz questions and answers as well as the object of the correct answer
const quizQuestions = [
    {
        question: "What is the keyword used to declare a variable in JavaScript?",
        answers: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Which operator is used for strict equality testing in JavaScript?",
        answers: ["==", "===", "!=", "!=="],
        correctAnswer: "==="
    },
    {
        question: "What is the DOM?",
        answers: ["a programming language", "a web browser", "a programming interface for web documents", "none of the above"],
        correctAnswer: "a programming interface for web documents"
    },
    {
        question: "What method would you use to add an element to the end of an array?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        question: "What does JSON stand for?",
        answers: ["JavaSript Object Notation", "JavaScript Object Network", "JavaScript Object Navigator", "none of the above"],
        correctAnswer: "JavaScript Object Notation"
    },
   
];

// define variables for quiz functionality
let currentQuestion = 0;
let score = 0;
let timeLeft = 90;
let timerInterval;
let playerName;

function startQuiz() {
    playerName = document.getElementById("player-name").value;
    displayQuestion();
}


// This function shows the current question and its answer choices
function displayQuestion() {
    choices.setAttribute("style", "display:inline")
    // This if-else statement checks to see if there are more questions if 'currentQuestions is less than the total number of questions in 'quizQuestions then it will give you another question. If not, you have answered all the questions and the quiz is finished.         
    if (currentQuestion < quizQuestions.length) {
        // Shows the current question
        question.textContent = quizQuestions[currentQuestion].question;
        //console.log(quizQuestions[currentQuestion].question)
        // Creates buttons for each answer option for the current question
        for (let i = 0; i < 4; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            //choice.innerText = quizQuestions[currentQuestion].answers[Object.keys(quizQuestions[currentQuestion].answers)[i]];
            input.setAttribute("type", "radio");
            input.setAttribute("id",`${i}`);
            input.setAttribute("value", quizQuestions[currentQuestion].answers[i]);
            label.innerText = quizQuestions[currentQuestion].answers[i];
            //label.setAttribute("type", "radio");
            label.setAttribute("for", `${i}`);
            choices.append(input, label);
        }

        // This shows the users current progress in the quiz
        //let progress = document.getElementById("progress");
        //progress.innerText = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    } else {
        // This shows the score of the user when the quiz has finished
        quizContainer.innerText = "score";
        let scoreElement = document.createElement("h2");
        scoreElement.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
        quizContainer.appendChild(scoreElement);

        // Shows the reset button so the user can take the quiz again
        let resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        resetButton.setAttribute("class", "reset");
        resetButton.setAttribute("onclick", "resetQuiz()");
        quizContainer.appendChild(resetButton);
    }
}

function submitAnswer() {
    console.log('You clicked the submit butotn');
    let choiceSelected = document.querySelectorAll('input[type="radio"]:checked')
    console.log(choiceSelected);
    console.log(choiceSelected[0].value)
}
//console.log(document.querySelectorAll('input[type="radio"].checked'));
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);