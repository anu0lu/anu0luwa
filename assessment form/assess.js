
// const questions = [
//     "What is the capital of France?",
//     "Who wrote 'Romeo and Juliet'?",
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// const totalTime = 300; // 5 minutes in seconds
// let timeLeft = totalTime;

// function displayCurrentQuestion() {
//     const questionContainer = document.querySelector('.assessment-container');
//     questionContainer.innerHTML = `
//         <p>${questions[currentQuestionIndex]}</p>
//         <input type="text" id="answer" placeholder="Your answer">
//         <button onclick="checkAnswer()">Submit</button>
//     `;
// }

// function checkAnswer() {
//     const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
//     const correctAnswer = "paris";

//     if (userAnswer === correctAnswer) {
//         score++;
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         displayCurrentQuestion();
//     } else {
//         showScore();
//     }
// }

// function showScore() {
//     const questionContainer = document.querySelector('.assessment-container');
//     questionContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
// }

// function updateTimer() {
// }

// updateTimer();



const questions = [
    {
        question: "How many colors are on TheTrybe logo?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
    },
    {
        question: "Who's the best developer?",
        options: ["Timi", "Excellence", "Lolade", "Ade"],
        correctIndex: 1,
    },
    {
        question: "Where was the former location of TheTrybe?",
        options: ["Library", "Chemistry lab", "Uncle Seyi's office", "I don't know"],
        correctIndex: 2,
    },
    {
        question: "What's the address of TheTrybe?",
        options: ["Beside Shoprite", "Somewhere in Osun State", "Plot 4, Mummy's Place Avenue", "Pluto"],
        correctIndex: 2,
    },
    {
        question: "TheTrybe is on what floor in the Emplace building?",
        options: ["1st floor", "2nd floor", "3rd floor", "4th floor"],
        correctIndex: 1,
    },
    {
        question: "How big is TheTrybe workspace?",
        options: ["1 million px by 1 million px", "28 feet by 35 feet", "I can't say", "10 square meters"],
        correctIndex: 2,
    },
    
    {
        question: "Which member of TheTrybe goes to UNIBEN?",
        options: ["Timi", "Excellence", "Lolade", "Ade"],
        correctIndex: 0,
    },
    {
        question: "Who is the tallest member of TheTrybe?",
        options: ["Ade", "Excellence", "Ayomide", "Uncle Seyi"],
        correctIndex: 3,
    },
];

let currentQuestionIndex = 0;
let score = 0;
const totalTime = 90; 
let timeLeft = totalTime;

function displayCurrentQuestion() {
    const questionContainer = document.querySelector('.assessment-container');
    const currentQuestion = questions[currentQuestionIndex];

    let optionsHtml = "";
    currentQuestion.options.forEach((option, index) => {
        optionsHtml += `<label>
            <input type="radio" name="answer"id="radio-btn" value="${index}">
            ${option}
        </label><br>`;
    });

    questionContainer.innerHTML = `
        <div class="timer"></div>
        <p>${currentQuestion.question}</p>
        <form id="answer-form">${optionsHtml}</form>
        <button id="submit-btn" onclick="checkAnswer()">Next</button>
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const submitButton = document.querySelector('#submit-btn')
    if (selectedOption) {
        const selectedAnswerIndex = parseInt(selectedOption.value);
        const correctAnswerIndex = questions[currentQuestionIndex].correctIndex;

        if (selectedAnswerIndex === correctAnswerIndex) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayCurrentQuestion();
        } else {
            submitButton.textContent = 'submit'
            showScore()
        }
    }
}
function showScore() {
    const questionContainer = document.querySelector('.assessment-container');
    questionContainer.innerHTML = 
    `<p class="congratulations">Weldone, <span id="displayUserName"></span>!</p>
    <p class="congratulations">You got ${score} out of ${questions.length} questions</p>`;
    const storedUserName = localStorage.getItem('userName');
    document.getElementById('displayUserName').textContent = storedUserName;
}



function updateTimer() {
    const timerDisplay = document.querySelector('.timer');

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        showScore();
    }
}

displayCurrentQuestion();
updateTimer();
