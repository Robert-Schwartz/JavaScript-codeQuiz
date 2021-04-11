//-----Global variables
var begin = document.querySelector("#beginBtn");
var next = document.querySelector("#nextBtn");
var quizContent = document.querySelector("#questionAnswers");
var answers = document.querySelectorAll(".option");
var quizScore = document.querySelector("#scoreBox");
var result = document.querySelector("#resultText");
var questionIndex = 0;
var newScore = 0;
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
  document.querySelector("#questions").textContent =
    questionCard[questionIndex].question;

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
  //   answers.classList.remove("wrong correct");
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
