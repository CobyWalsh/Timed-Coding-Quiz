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

// function to start quiz
function startQuiz() {
    // hide start button and show quiz container
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}
// set timer interval to count down every second
timerInterval = setInterval(function () {
    timeLeft--;
}, 1000);

