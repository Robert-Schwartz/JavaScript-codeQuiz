//-----Global variables
var begin = document.querySelector("#beginBtn");
var next = document.querySelector("#nextBtn");
var quizContent = document.querySelector("#questionAnswers");
var answers = document.querySelectorAll(".option");
var quizScore = document.querySelector("#scoreBox");
var result = document.querySelector("#resultText");
var gameOver = document.querySelector("#gameOver");
var questionIndex = 0;
var newScore = 0;
var timer = 60;

//TODO:  create function for timer


//-----Start the Game and Timer when user clicks "Begin"
begin.addEventListener("click", function () {
  gameStart();
  console.log("Start questions");
  // TO DO:  gameTime();
  // TO DO:  gameScore();
});

//-----Display Game Questions
function gameStart() {
  begin.classList.add("hide");
  document.querySelector("#welcome").classList.add("hide");
  quizContent.classList.remove("hide");
  next.classList.remove("hide");
  quizScore.textContent = `Score: ${newScore}`;
  gameNext();
}

//-----Pull Questions and Answers to display
function gameNext() {
  if (questionIndex <= questionCard.length - 1) {
    document.querySelector("#questions").textContent =
      questionCard[questionIndex].question;

    for (let i = 0; i < answers.length; i++) {
      answers[i].textContent = questionCard[questionIndex].answers[i].text;
      answers[i].value = questionCard[questionIndex].answers[i].response;
      answers[i].onclick = chooseAnswer;
    }
  } else {
    endGame();
    console.log("Success");
  }
}

//-----Choose answer
function chooseAnswer() {
  console.log("answer clicked!");
  console.log(this.value);

  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
    console.log(answers[i]);
  }

  if (this.value === "true") {
    this.classList.add("correct");
    newScore = newScore += 100;
    console.log(newScore);
    result.classList.remove("hide");
    quizScore.classList.add("hide");
    result.textContent = "Correct! +100 Pts";
  } else {
    this.classList.add("wrong");
    newScore = newScore -= 25;
    console.log(newScore);
    result.classList.remove("hide");
    quizScore.classList.add("hide");
    result.textContent = "Incorrect! -25 Pts";
  }
}

//-----Pull next question when user clicks "Next"
next.addEventListener("click", function () {
  questionIndex++;
  resetAnswers();
  gameNext();
});

//----- Reset Answers
function resetAnswers() {
  console.log("reset quiz box");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = false;
    answers[i].classList.remove("correct");
    answers[i].classList.remove("wrong");
    console.log(answers[i]);
  }
  result.classList.add("hide");
  quizScore.classList.remove("hide");
  quizScore.textContent = `Score: ${newScore}`;
}

//-----end Quiz
function endGame() {
  gameOver.classList.remove("hide");
  next.classList.add("hide");
  quizContent.classList.add("hide");
  document.querySelector("#finalScore").textContent = newScore;
}

//questions list:
var questionCard = [
  {
    question: "Q1)     Which of the following best describes JavaScript?:",
    answers: [
      { text: "a low-level programming language.", response: false },
      { text: "a scripting language precompiled in the browser.", response: false },
      { text: "a compiled scripting language.", response: false },
      { text: "an object-oriented scripting language.", response: true },
    ],
  },

  {
    question: "Q2)     Which of the following is not considered a JavaScript operator?",
    answers: [
      { text: "new", response: false },
      { text: "this", response: true },
      { text: "delete", response: false },
      { text: "typeof", response: false },
    ],
  },

  {
    question: "Q3)     JavaScript is interpreted by the _________:",
    answers: [
      { text: "Client", response: true },
      { text: "Server", response: false},
      { text: "Object", response: false },
      { text: "Database", response: false },
    ],
  },

  {
    question:
      "Q) Using a(n) _______ statement is how you test for a specific condition.",
    answers: [
      { text: "Select", response: false },
      { text: "if", response: true },
      { text: "Switch", response: false },
      { text: "For", response: false },
    ],
  },
  {
    question:
      "Q) Which is not a primitive type :",
    answers: [
      { text: "String", response: false },
      { text: "Array", response: true },
      { text: "Number", response: false },
      { text: "Boolean", response: false },
    ],
  },
  {
    question:
      "Q) The limits in which a variable exists is the? :",
    answers: [
      { text: "Body", response: false },
      { text: "Scale", response: false },
      { text: "Scope", response: true },
      { text: "Field", response: false },
    ],
  },
  {
    question:
      "Q) which operator would you use to check if two values were both true? :",
    answers: [
      { text: "||", response: false },
      { text: "&&", response: true },
      { text: "&", response: false },
      { text: "|", response: false },
    ],
  },
  {
    question:
      "Q) What is Math.floor used for? :",
    answers: [
      { text: "Round down a number", response: true },
      { text: "Set number to '0'", response: false },
      { text: "Delete number", response: false },
      { text: "All of the above", response: false },
    ],
  },
  {
    question:
      "Q) Objects mainly contain?: ",
    answers: [
      { text: "One value", response: false },
      { text: "If - else statements", response: false },
      { text: "for loops", response: false },
      { text: "Key/Value pairs", response: true },
    ],
  },
];
