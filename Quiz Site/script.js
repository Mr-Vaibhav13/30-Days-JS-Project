const questions = [
    {
        question:"The collection of unprocessed facts, figures and symbols is known as ",
        answers:[
            {text:"Information", correct: false},
            {text:"Software", correct: false},
            {text:"Data and Information", correct: false},
            {text:"None of the above", correct: true},
        ]
    },

    {
        question:"Hardware is any part of the computer that can be seen and touched ",
        answers:[
            {text:"True", correct: true},
            {text:"False", correct: false},
            {text:"Not sure", correct: false},
            {text:"None of the above", correct: false},
        ]
    },

    {
        question:"Components of computer hardware are ",
        answers:[
            {text:"Input devices and output devices", correct: false},
            {text:"A system unit and storage devices", correct: false},
            {text:"Communication devices", correct: false},
            {text:"All of the above", correct: true},
        ]
    },

    {
        question:"Which disk is made up of a circular thin plastic jacket coated with magnetic material ",
        answers:[
            {text:"Hard Disk", correct: false},
            {text:"Compact Disk ", correct: false},
            {text:"DVD", correct: false},
            {text:"Floppy Disk", correct: true},
        ]
    },

    {
        question:"Which system uses only the digits 0 and 1 ",
        answers:[
            {text:"Bits", correct: false},
            {text:"Binary number system", correct: true},
            {text:"Secondary number system", correct: false},
            {text:"Nibbles", correct: false},
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

const startQuiz = () =>{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}


const showQuestion=()=>{
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


const resetState = () => {
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


const selectAnswer = (e)=>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex<questions.length){
        showQuestion();
    }

    else{
        showScore();
    }
}



nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();