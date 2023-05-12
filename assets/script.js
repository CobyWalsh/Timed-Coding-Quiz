// Function to start quiz when the "start quiz button is clicked"
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const choices = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const resetButton = document.getElementById("reset-btn");
// Defines the array of quiz questions and answers as well as the object of the correct answer
const quizQuestions = [
    {
        question: " 1) What is the keyword used to declare a variable in JavaScript?",
        answers: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "2) Which operator is used for strict equality testing in JavaScript?",
        answers: ["==", "===", "!=", "!=="],
        correctAnswer: "==="
    },
    {
        question: "3) What is the DOM?",
        answers: ["a programming language", "a web browser", "a programming interface for web documents", "none of the above"],
        correctAnswer: "a programming interface for web documents"
    },
    {
        question: "4) What method would you use to add an element to the end of an array?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        question: "5) What does JSON stand for?",
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

// This funtion starts the quiz by clicking the start button and the user enters their name
function startQuiz() {
    playerName = document.getElementById("player-name").value;
    buildQuiz(currentQuestion);
}

// This function shows the current question and its answer choices
function buildQuiz(curQ) {
    choices.setAttribute("style", "display:inline")
    console.log("buildquiz called")
    choices.innerHTML = ""
    // This if-else statement checks to see if there are more questions if 'currentQuestions is less than the total number of questions in 'quizQuestions then it will give you another question. If not, you have answered all the questions and the quiz is finished.         
    if (curQ < quizQuestions.length) {
        // Shows the current question
        question.textContent = quizQuestions[curQ].question;
    console.log("in if loop")
        // Creates buttons for each answer option for the current question
        for (let i = 0; i < quizQuestions[curQ].answers.length; i++) {
            console.log("in for loop " + i);
            let input = document.createElement("input");
              label = document.createElement("label");
            input.setAttribute("type", "radio");
            input.setAttribute("id", `${i}`);
            input.setAttribute("value", quizQuestions[curQ].answers[i]);
            label.innerText = quizQuestions[curQ].answers[i];
            label.setAttribute("for", `${i}`);
            choices.append(input, label);
            
        }

    } else {
        // This shows the score of the user when the quiz has finished
        quizContainer.innerText = "score";
        let scoreElement = document.createElement("h2");
        scoreElement.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
        quizContainer.appendChild(scoreElement);

    }
}

// This function presents the next question after the user clicks the submit button
function submitAnswer() {
    console.log('You clicked the submit butotn');
    let choiceSelected = document.querySelectorAll('input[type="radio"]:checked')
    console.log(choiceSelected);
    console.log(choiceSelected[0].value)
    buildQuiz(currentQuestion + 1);
}

// This function resets the quiz after the user clicks the reset button
function resetQuiz() {
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.setAttribute("class", "reset");
    resetButton.setAttribute("onclick", "resetQuiz()");
    quizContainer.appendChild(resetButton);
}
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);
resetButton.addEventListener("click", resetQuiz);