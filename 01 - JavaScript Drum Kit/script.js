var keys = document.getElementsByClassName('key');
var validKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

window.addEventListener('keydown', function(e) {
  // Get button and audio elements for actions when pressed
  var button = document.querySelector(`div[data-key="${e.keyCode}"]`);
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // If a valid key is pressed
  if (inArray(e.keyCode, validKeys)) {
    // Add class of 'playing' IF not already there, then make noise
    if (!inArray("playing", button.classList)) button.className += " playing";
    audio.play();
  }

});

// Add transitionend listener to every button
for (let i = 0; keys[i]; i++) {
  keys[i].addEventListener('transitionend', function(e) {
    // Only fire if transform event was passed
    if (e.propertyName === 'transform') keys[i].className = "key";
  });
}

// Helper Functions
function inArray(num, arr) {
  var valid = false;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (num === arr[i]) {
      valid = true;
      break;
    } 
  }
  return valid;
}

