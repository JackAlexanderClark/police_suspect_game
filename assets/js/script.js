//One single guess of suspect allowed
const randomNumber = Math.floor(Math.random() * 100) + 1
console.log('Random Number', randomNumber)

// One guess gameloop
function checkGuess() {
  let myGuess = guess.value;
  if (myGuess === randomNumber) {
    feedback.textContent = "You got it right!"
  } else if (myGuess > randomNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
  } else if (myGuess < randomNumber) {
   feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
 }
}
submitGuess.addEventListener('click', checkGuess)

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
$("")

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


