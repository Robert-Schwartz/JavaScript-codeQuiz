//global variables
var begin = document.querySelector("#beginBtn");
var next = document.querySelector("#nextBtn");
var quizContent = document.querySelector("#questionAnswers");
var questionIndex = 0;

//create function for score

//create funciton for timer

//Start the Game and Timer
begin.addEventListener("click", function () {
  gameStart();
  // gameTime();
  // gameScore();
});

next.addEventListener("click", function () {
  questionIndex++;
  //remove correct and wrong classes
  gameNext();
});

function gameStart() {
  begin.classList.add("hide");
  document.querySelector("#welcome").classList.add("hide");
  quizContent.classList.remove("hide");
  next.classList.remove("hide");
  gameNext();
  //add score and timer
}

//continue to next question
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

//Choose answer
function chooseAnswer() {
  console.log("answer clicked!");
  console.log(this.value);
  if (this.value === "true") {
    this.classList.add("correct");
    //add score incriment {score ++}
  } else {
    this.classList.add("wrong");
  }
  //add in index ++ on next questionindex++
}

//Display result, add score

//next question or quit

//end game
// while loop - as long as no length //
// check before game next to see if anything left in array, if not run endgame


//display score, log high scores

//retry or quiz

//questions list:
var questionCard = [
  {
    question: "Who am I?",
    answers: [
      { text: "I don't know", response: true },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
    ],
  },

  {
    question: "Who am me?",
    answers: [
      { text: "I know", response: true },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
    ],
  },

  {
    question: "Who am we?",
    answers: [
      { text: "I know", response: true },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
      { text: "I don't know", response: false },
    ],
  },
];
