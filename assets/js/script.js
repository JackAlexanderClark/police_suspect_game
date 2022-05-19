//Getting jQuery ready for when the page has fully loaded so can correctly manipulate elements as intended
$(document).ready(function(){
  console.log("Document fully loaded - jQuery is ready");
});

//Defining the constant true suspect
const correctSuspect = suspect8;
let attempts = 0;
// One guess gameloop
document.getElementById("guessChoice").onclick = checkGuess();

//Primary checking 
function checkGuess() {
  let playerGuess = guess.value;
  if (attempts === 3) {
    feedback.textContent = "Game over! Failed. You have used all 3 guesses!";
    console.log("GAME FAILED 3 GUESSES USED");
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

//Resets the game attempts to 3
function restartGame() {
  attempts = 3;
  //NEED TO CHANGE INNER HTML BOX TO KEEP TRACK OF THE GAME ATTEMPTS - RESEARCH
  gameAttempts.innerHTML = '3';
  feedback.textContent = "Game reset you have 3 more guesses to identify the suspect";
}

function incorrectGuess() {
}

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
