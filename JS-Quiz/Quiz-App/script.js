document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.querySelector('.app').style.display = 'block';
    }, 3000);
});


const questions = [
    {
        question: "How many players are there in each cricket team on the field during a match?",
        answers: [
            {
                text: "11",
                correct:true ,
            },
            {
                text: "10",
                correct: false,
            },
            {
                text: "7",
                correct: false,
            },
            {
                text: "12",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of the three wooden stumps topped by two bails on which the ball is aimed?",
        answers: [
            {
                text: "Wicket",
                correct: true,
            },
            {
                text: "Pitch",
                correct: false,
            },
            {
                text: "Boundry",
                correct: false,
            },
            {
                text: "Crease",
                correct: false,
            },
        ],
    },
    {
        question: "Which format of cricket involves two teams playing a single match over a maximum of 50 overs per side?",
        answers: [
            {
                text: "Test Match",
                correct: false,
            },
            {
                text: "ODI",
                correct: true,
            },
            {
                text: " T20",
                correct: false,
            },
            {
                text: "Border Gavaskar Trophy",
                correct: false,
            },
        ],
    },
    {
        question: "What is the term used to describe a batsman who scores 100 runs or more in an innings?",
        answers: [
            {
                text: "Wicket-keeper",
                correct: false,
            },
            {
                text: "All-rounder",
                correct: false,
            },
            {
                text: "Captain",
                correct: false,
            },
            {
                text: "Centurian",
                correct: true,
            },
        ],
    },
    {
        question: "Which country is considered the birthplace of cricket?",
        answers: [
            {
                text: "England",
                correct: true,
            },
            {
                text: "Australia",
                correct: false,
            },
            {
                text: "Sri Lanka",
                correct: false,
            },
            {
                text: "South Africa",
                correct: false,
            },
        ],
    },
    {
        question: " How many runs are awarded for hitting the ball over the boundary rope without it bouncing?",
        answers: [
            {
                text: "1",
                correct: false,
            },
            {
                text: "2",
                correct: false,
            },
            {
                text: "3",
                correct: false,
            },
            {
                text: "6",
                correct: true,
            },
        ],
    },
    {
        question: "What is the name of the flat, oval-shaped area in the center of the field where the bowler runs to deliver the ball?",
        answers: [
            {
                text: "Pitch",
                correct: true,
            },
            {
                text: "Square",
                correct: false,
            },
            {
                text: "Wicket",
                correct: false,
            },
            {
                text: "Boundry",
                correct: false,
            },
        ],
    },
    {
        question: "Which bowler holds the record for the most wickets taken in Test cricket history?",
        answers: [
            {
                text: " Shane Warne (Australia)",
                correct: false,
            },
            {
                text: " Glenn McGrath (Australia)",
                correct: false,
            },
            {
                text: "Muttiah Muralitharan (Sri Lanka)",
                correct: true,
            },
            {
                text: "James Anderson (England)",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?",
        answers: [
            {
                text: "The Ashes",
                correct: false,
            },
            {
                text: "The Oval Trophy",
                correct: false,
            },
            {
                text: "The Champions Trophy",
                correct: false,
            },
            {
                text: "ICC Cricket World Cup",
                correct: true,
            },
        ],
    },
    {
        question: "Who is longest served indian cricket captain",
        answers: [
            {
                text: "M.S Dhoni",
                correct: true,
            },
            {
                text: "Sachin Tendulakar",
                correct: false,
            },
            {
                text: "Rohit Sharma",
                correct: false,
            },
            {
                text: "Virat Kohli",
                correct: false,
            },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
let isTrue=false

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    console.log(answerButtons);
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

