// define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the keyword used to declare a variable in JavaScript?",
        answers: {
            a: "var",
            b: "let",
            c: "const",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Which operator is used for strict equality testing in JavaScript?",
        answers: {
            a: "==",
            b: "===",
            c: "!=",
            d: "!=="
        },
        correctAnswer: "b"
    },
    {
        question: "What is the DOM?",
        answers: {
            a: "a programming language",
            b: "a web browser",
            c: "a programming interface for web documents",
            d: "none of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What method would you use to add an element to the end of an array?",
        answers: {
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()"
        },
        correctAnswer: "a"
    },
    {
        question: "What does JSON stand for?",
        answers: {
            a: "JavaScript Object Notation",
            b: "JavaScript Object Network",
            c: "JavaScript Object Navigator",
            d: "none of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        answers: {
            a: "reverse()",
            b: "sort()",
            c: "changeOrder(order)",
            d: "none of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which statement is used to stop a loop in JavaScript?",
        answers: {
            a: "break",
            b: "stop",
            c: "exit",
            d: "none of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onchange",
            b: "onclick",
            c: "onmouseclick",
            d: "none of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which method removes the last element from an array and returns that element?",
        answers: {
            a: "pop()",
            b: "shift()",
            c: "remove()",
            d: "none of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is a closure in JavaScript?",
        answers: {
            a: "a function inside another function",
            b: "a variable that is passed as an argument to a function",
            c: "a way to access variables outside a function",
            d: "none of the above"
        },
        correctAnswer: "a"
    }
];

// define variables for quiz functionality
let currentQuestion = 0;
let score = 0;
let timeLeft = 90;
let timerInterval;
let playerName;

// function to start quiz
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    playerName = document.getElementById("player-name").value;
    displayQuestion();
}

function displayQuestion() {
    let choices = document.getElementById("quiz-container");
    choices = document.getElementById("choices");
    choices.setAttribute("style", "display:inline")
    //let submitButton = document.getElementById("submit-btn");
        //submitButton.addEventListener("click", submitAnswer);
    if (currentQuestion < quizQuestions.length) {
        // display the question
        let question = document.getElementById("question")
        question.textContent = quizQuestions[currentQuestion].question;
        console.log(quizQuestions[currentQuestion].question)
        // displays the choices
        // choices.textContent = "";

        for (let i = 0; i < Object.keys(quizQuestions[currentQuestion].answers).length; i++) {
            let choice = document.createElement("button");
            choice.innerText = quizQuestions[currentQuestion].answers[Object.keys(quizQuestions[currentQuestion].answers)[i]];
            choice.setAttribute("class", "choice");
            choice.setAttribute("value", Object.keys(quizQuestions[currentQuestion].answers)[i]);
            choice.setAttribute("onclick", "checkAnswer(this)");
            choices.appendChild(choice);
        }

        // display the progress
        let progress = document.getElementById("progress");
        progress.innerText = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    } else {
        // display the score
        let quizContainer = document.getElementById("quiz-container");
        quizContainer.innerTextL = "";
        let scoreElement = document.createElement("h2");
        scoreElement.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
        quizContainer.appendChild(scoreElement);

        // display the reset button
        let resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        resetButton.setAttribute("class", "reset");
        resetButton.setAttribute("onclick", "resetQuiz()");
        quizContainer.appendChild(resetButton);
    }
}  
