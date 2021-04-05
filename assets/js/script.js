
//Intro Section
var start = document.querySelector("#quizStart");

//Instructions Section
var instructions = document.querySelector("#quizInstructions");
var exit = document.querySelector("#exitBtn");
var continueBTN = document.querySelector("#contBtn");

//Quiz Section
var quiz = document.querySelector("#quiz");
var time = document.querySelector("time");

//Quiz Questions
var questionNo = document.querySelector("#questionsNo");
var questionText = document.querySelector("#questionText");

// Quiz multiple choice options
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

// Answer Correct and Next Button
var totalCorrect = document.querySelector("#totalCorrect");
var nextQuestion = document.querySelector("#nextQuestion");

// Result Section
var result = document.querySelector("#result");
var points = document.querySelector("#points");
var quit = document.querySelector("#quit");
var retry = document.querySelector("#retry");

//Get All 'H4" from Quiz Section (Questions.JS)
var choiceQue = document.querySelector(".choiceQue");

var index = 0;
var timer= 0;
var interval = 0;

//Total Points
var correct= 0;

//store Answer Value
var userAns = undefined;

//When "start" button is clicked
start.addEventListener("click", () =>{
    start.style.display ="none";
    instructions.style.display ="block";
});

//When "Exit" button is clicked
exit.addEventListener("click", () =>{
    start.style.display ="block";
    instructions.style.display ="none";
});

//setup quiz timer
var countDown = ()=> {
    if (timer ===20)
    {
        clearInterval(interval);
    } 
    else {
        timer++;
        console.log(timer);
    }}
    
    setInterval(countDown,1000);

//When "Continue" button is clicked
continueBTN.addEventListener("click", () =>{
    instructions.style.display ="none";
    quiz.style.display ="block";
});


