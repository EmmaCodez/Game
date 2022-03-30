const myChoice = document.querySelector("#myChoice");
const computerChoice = document.querySelector("#computerChoice");
const result = document.querySelector("#result");
const choices = document.querySelector(".choice")

choices.forEach((choice) => choice.addEventListener("click", choiceHandler));

function choiceHandler() {
    myChoice.innerHTML = this.innerHTML;
    computerChoiceHandler();
    choseWinnerHandler();
}

function computerChoiceHandler() {
    const comChoice = Math.floor(Math.random() * choices.length);

if (comChoice === 0) {
    computerChoice.innerHTML = "Rock";
}
else if (comChoice === 1){
    computerChoice.innerHTML = "Paper";
}
else{
    computerChoice.innerHTML = "Scissors";
}

function choseWinnerHandler() {
    //draw cases
    if (myChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Rock") {
        result.innerHTML = "You Draw";
    }
    if (myChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Paper") {
        result.innerHTML = "You Draw";
    }
    if (myChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Scissors") {
        result.innerHTML = "You Draw";
    }
}
//lose cases
if (myChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Paper") {
    result.innerHTML = "You Lose";
}
if (myChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Scissors") {
    result.innerHTML = "You Lose";
}
if (myChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Rock") {
    result.innerHTML = "You Lose";
}
//win cases
if (myChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Scissors") {
    result.innerHTML = "You Win";
}
if (myChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Rock") {
    result.innerHTML = "You Win";
}
if (myChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Paper") {
    result.innerHTML = "You Win";
}