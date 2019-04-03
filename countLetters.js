
function countLetters(spacedString) {

var string = spacedString.split(' ').join('');
var letters = {};
var letterCounter = 0;

  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];

    if (letters[currentLetter] === undefined) {
      letters[currentLetter] = 1;
      letterCounter = 1;
    } else {
      letters[currentLetter] += 1;
    }
  }
  return letters;

}

console.log(countLetters("lighthouse in the house"));