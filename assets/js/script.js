//Defining the constant true suspect
const correctSuspect = suspect8;
let attempts = 0;
// One guess gameloop
document.getElementById("guessChoice").onclick = checkGuess();

function checkGuess() {
  let playerGuess = guess.value;
  if (attempts === 3) {
    feedback.textContent = "Game over! Failed. You have used all 3 guesses!";
    //Need to restart the game using the restartGame() function

    return; 
  }
  if (playerGuess === suspect8) {
    attempts = 0;
    feedback.textContent = "You got it right! Suspect 8 was the criminal who killed your family!";
    console.log("CORRECT ANSWER");
  } else if (myGuess != correctSuspect) {
    attempts += 1;
    feedback.textContent = "Your guess was" + playerGuess + ". That's incorrect, you selected an inoccent man. Try Again!"
    console.log("INCORRECT ANSWER");
};

function restartGame() {
  //
}

function incorrectGuess() {
  //-1 from 3 guesses
}

//Incrementing wrong answer score
let wrongAnswer = myGuess != correctSuspect;
document.getElementsByClassName("wrongAnswerBox").addClass("incrementWrongScore");

submitGuess.addEventListener('click', checkGuess);

// jQuery button for animating clue 01
$("#button-1").click(function(){
  $(this).animate(
    left, '100px',
    height, '100px',
    width, '50px',
    opacity, '0.3').fadeOut("slow").hide("slow")
});

// Changing the color of button-1 in CLUES
function changeColor(newColor) {
  var elem = document.getElementById('button-1');
  elem.style.color = newColor;
}

// Method chaining jQuery paragraph hiding
$("#paragraph-1").click(function () {
  $(this).fadeOut("#button").hide(2500).show(1000)
});

// Mouse enter and leave jQuery
$('#clue-1')mouseenter(function () {
  $(this).removeClass('makeRed').addClass('makeBlue');
});

$('#clue-1')mouseleave(function () {
  $(this).removeClass('makeBlue').addClass('makeRed');
});

/*
*  js audio-player random synths - dan project
*  need clear on off button for players
*/
