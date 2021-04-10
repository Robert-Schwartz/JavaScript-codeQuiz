//-----Global variables
var begin = document.querySelector("#beginBtn");
var next = document.querySelector("#nextBtn");
var quizContent = document.querySelector("#questionAnswers");
var questionIndex = 0;
var quizScore = 0;
var timer = 60;
// TODO:  create function for score
//TODO:  create function for timer

//-----Start the Game and Timer when user clicks "Begin"
begin.addEventListener("click", function () {
  gameStart();
  console.log("Start questions");
  // TO DO:  gameTime();
  // TO DO:  gameScore();
});

//-----Display game questions
function gameStart() {
  begin.classList.add("hide");
  document.querySelector("#welcome").classList.add("hide");
  quizContent.classList.remove("hide");
  next.classList.remove("hide");
  gameNext();
  //TO DO:  add score and timer
}

//-----Pull Questions and Answers to display
function gameNext() {
  document.querySelector("#questions").textContent =
    questionCard[questionIndex].question;
  let answers = document.querySelectorAll(".option");

  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = questionCard[questionIndex].answers[i].text;
    answers[i].value = questionCard[questionIndex].answers[i].response;
    answers[i].onclick = chooseAnswer;
  }
}

//-----Choose answer
function chooseAnswer() {
  console.log("answer clicked!");
  console.log(this.value);
  if (this.value === "true") {
    this.classList.add("correct");
    //add score incriment {score ++}
  } else {
    this.classList.add("wrong");
  }
}

//-----Pull next question when user clicks "Next"
next.addEventListener("click", function () {
  questionIndex++;
  gameNext();
});

//-----end game
//TO D0:  add while loop - as long as no length
// // check before game next to see if anything left in array, if not run endgame

//display score, log high scores

//retry or quiz

//questions list:
var questionCard = [
  {
    question: "Q1)     Never gonna:",
    answers: [
      { text: "Give You Up", response: true },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
    ],
  },

  {
    question: "Q2)     Never gonna:",
    answers: [
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
      { text: "Let You Down", response: true },
      { text: "I don't know", response: false },
    ],
  },

  {
    question: "Q3)     Never gonna:",
    answers: [
      { text: "I don't know", response: false },
      { text: "Run Around and Desert You", response: true },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
    ],
  },
];
